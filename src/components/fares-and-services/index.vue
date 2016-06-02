
<template>
  <h2>Fares and services</h2>
  <table>
    <thead>
      <tr>
        <th v-for="key in columns">
          {{key | capitalize}}
          <span class="arrow">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="
        entry in gridData">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
  <!-- <table>
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{active: sortKey == key}">
          {{key | capitalize}}
          <span class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{active: sortKey == key}">
          {{key | capitalize}}
          <span class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="
        entry in data
        | filterBy filterKey
        | orderBy sortKey sortOrders[sortKey]">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table> -->
</template>

<script>

export default {
  components: {},
  data () {
    return {
      columns: ['services', 'rate'],
      gridData: [
        { services: 'presentation', rate: '500 EUR' },
        { services: 'film', rate: '600 EUR' },
        { services: 'shooting', rate: '550 EUR' },
        { services: 'travel', rate: '350 EUR' }
      ]
    }
  },
  methods: {
    sortBy: function (key) {

    }
  },
  ready () {

  }
}
</script>

<style scoped>
h2 {
  margin-top: 2em;
}

table {
  width: 100%;
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 100%;
  padding: 1em 1em;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

#search {
  margin-bottom: 10px;
}
</style>
