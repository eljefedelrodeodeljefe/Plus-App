
<template>
  <section class='calendar'>
    <nav class="time-nav">
        <i v-on:click="decreaseMonth">next</i><h1>{{ months[selected_month] }} {{ selected_year }}</h1><i v-on:click="increaseMonth">next</i>
    </nav>
  <form action='#'>
    <label v-for="weekday in weekdays" class='weekday'>{{ weekday }}</label>
    <section class="month">
      <label v-for="day in dataDay" class='day' data-day='{{ $index }}' track-by="date" transition="fade">
        <input class='appointment' date-day={{ day.name }} placeholder='What would you like to do?' required='true' type='text'>
        <span class="{{ day.isBefore ? 'isBefore': ''}} {{ day.isAfter ? 'isAfter': ''}}">{{ day.name }}</span>
        <em></em>
      </label>
    </section>
    <div class='clearfix'></div>
  </form>
</section>
</template>

<script>
const weekdayMap = {0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5}
/*
  Initial idea and code is from https://codepen.io/ciprianionescu/pen/JYPwwL
 */
function getBoundaries (date) {
  if (!date) {
    date = new Date()
  }
  return {
    first: new Date(date.getFullYear(), date.getMonth() - 1, 1).getDay(), // api expects real time
    last: new Date(date.getFullYear(), date.getMonth() - 1 + 1, 0).getDay()
  }
}

export default {
  components: {

  },
  data () {
    return {
      weekdays: [ 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su' ],
      selected_month: new Date().getMonth() + 1,
      selected_year: new Date().getFullYear(),
      months: {
        1:  'January',
        2:  'February',
        3:  'March',
        4:  'April',
        5:  'May',
        6:  'June',
        7:  'July',
        8:  'August',
        9:  'Sepetember',
        10: 'October',
        11: 'November',
        12: 'December'
      },
      dataDay: [],
      dateOffset: weekdayMap[getBoundaries().first]
    }
  },
  methods: {
    increaseMonth: function() {
      if (this.selected_month === 12) {
        this.selected_month = 1
        this.selected_year = this.selected_year + 1
      } else {
        this.selected_month++
      }
      this.dateOffset = weekdayMap[getBoundaries(new Date(this.selected_year, this.selected_month, 1)).first]
      this.populateMonth(this.selected_year, this.selected_month, this.dateOffset)
    },
    decreaseMonth: function() {
      if (this.selected_month === 1) {
        this.selected_month = 12
        this.selected_year = this.selected_year - 1
      } else {
        this.selected_month--
      }
      this.dateOffset = weekdayMap[getBoundaries(new Date(this.selected_year, this.selected_month, 1)).first]
      this.populateMonth(this.selected_year, this.selected_month, this.dateOffset)
    },
    populateMonth: function(currentYear, currentMonth, offset) {
      const res = []
      const lastBefore = new Date(currentYear, currentMonth - 1, 0).getDate()
      const lastThisMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

      for (var i = 0; i < 42; i++) {
        res[i] = {}
        if (i === offset) {
          // this is start
          res[i].name = i - offset + 1
          res[i].date = new Date(currentYear, currentMonth - 1, i - offset)
        } else {
          if (i - offset <= 0) {
            // the rest of the month before
            res[i].name = i - offset + 1 + lastBefore
            res[i].isBefore = true
            res[i].date = new Date(currentYear, currentMonth - 1, i - offset)
          } else if(i - offset > lastThisMonth) {
            res[i].name = i - offset + 1 - lastThisMonth
            res[i].isAfter = true
            res[i].date = new Date(currentYear, currentMonth - 1, i - offset)
          } else {
            res[i].name = i - offset + 1
            res[i].date = new Date(currentYear, currentMonth - 1, i - offset)
          }
        }
      }
      this.dataDay = null
      this.dataDay = res
    },
    // genObjs: function (number) {
    //   const res = []
    //   for (var i = 0; i < number; i++) {
    //     res.push({})
    //   }
    //   return res
    // }
  },
  ready () {
    // this.dataDay = this.genObjs(42)
    this.populateMonth(this.selected_year, this.selected_month, this.dateOffset)
  }
}
</script>

<style lang="sass" scoped>

$background_color : #fcee6d;
$element_highlight : $background_color;
$calendar_color: #29323f;

$day_pill_size : 25px;
$pill_margin : 8px;


nav.time-nav {
  display: flex;
  width: 100%;
  flex: grow;
  justify-content: center;
}
nav.time-nav h1 {
  text-align: center;
  color: $element_highlight;
  margin: 0 0 30px 0;
  font-size: 1em;
}

section.calendar {
  background-color: $calendar_color;
  font-family: 'Dosis', sans-serif;
  color: #fff;
  width: 100%;
  padding-left: 1em;
  padding-right: 4em;
  // position: absolute;
  // top:50%; left:50%; transform: translateY(-50%) translateX(-50%);
  box-shadow: 5px 10px 20px rgba(0,0,0,.6);
  border-radius:5px;

  form {
    position:relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;

    label.weekday{
      display: inline-block;
      width:$day_pill_size; margin: $pill_margin;
      text-align: center;
      color: #999;
    }

    form {
      margin:0; padding:0;

    }

    label.day {
      display: inline-block;
      width:$day_pill_size; margin: $pill_margin;

      span {
        display: inline-block;
        width:$day_pill_size; height:$day_pill_size; line-height: $day_pill_size;
        margin: -2px 0 0 -2px;
        border-radius: 50%;
        border: 2px solid $calendar_color;
        text-align:center;
        transition: all .2s linear;
        cursor: pointer;

        &:hover {

          border-color: darken(desaturate($element_highlight, 20), 10);
        }
      }
      span.isBefore, span.isAfter  {
        opacity: 0.1;
      }

      em {
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border-color: $calendar_color;
        width: 3px; height:3px; background-color: darken($element_highlight, 50);
        margin-left:11px; margin-top: 2px;
        opacity: 0;
        transition: all .2s linear;
      }

      input[type=text]{
        border:0; opacity:0;
        position:absolute;
        margin-top: 40px;
        left: -45px; width: 380px; height: 1px; padding: 0;
        outline: none; font-size: 16px;
        transition: height .2s linear, opacity .2s linear, color .02s linear;
        color: #fff;

        &:focus{
          opacity: 1;
          height: 35px; padding:10px 40px;
          left: -45px; width: 300px;
          color: $calendar_color;

          &+ span {
            color: $element_highlight;
            border-color: $element_highlight;
            background: $element_highlight;
            color: $calendar_color;
            font-weight: bold;
            margin-bottom: 65px;
          }

          &~ em {
            border-radius: 0;
            border: 5px solid transparent;
            background: transparent;
            border-bottom-color:rgba(255,255,255,1);
            margin-top:-62px; margin-left:7px;
            width:0; height:0;
            display:inline-block; opacity: 1;
          }
        }

        &:valid {
          &+ span {

          }
          &~ em {
            display: inline-block;
            opacity: 1;
          }
        }

      }

      &.invalid {
        opacity: 0;  width:$day_pill_size; height:$day_pill_size;

        span, input {
          display: none;
        }
      }
    }
  }


  div.clearfix {
    clear:both;
  }

  div.hidden {
    display:none;
  }
}
</style>
