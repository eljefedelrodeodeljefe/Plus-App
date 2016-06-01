<style>
/* REVIEW(eljefedelrodeodeljefe): soem flexbox bug in here*/
div.artistlist-container {
  overflow-y: scroll;
  /*width: 100%;
  display: -ms-flexbox;
  display:-webkit-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;*/
}

section.artistlist-content {
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 2;
  box-shadow: 0 -0.3em 0.3em 0 rgba(0,0,0,0.3);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  text-align: center;
  padding-top: 3em;
}

section.artistlist-content h1 {
  color: rgba(235, 235, 235, 1);;
  font-size: 2em;
  margin-bottom: 0.3em;
  margin-top: 0.8em;
}

section.artistlist-content p {
  color: white;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  text-align: left;
  font-size: 0.7em;
}


div.artistlist-container > nav.filter {
  position: fixed;
  z-index: 4;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  background-color: rgba(255, 0, 0, 0.5);
  height: 3em;
}

section.artistlist-content.artist {

}

div.artist-cell {
  user-select: none;
  padding: 0.2em;
  padding-left: 1em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  margin-top: 0.12em;
  /*background-color: white;*/
  height: 4em;
  border-bottom-width: 0.1em;
  border-bottom-color: rgba(218, 218, 218, 0.5);
  border-bottom-style: solid;
}
div.artist-cell > span {
  height: 100%;
}
div.artist-cell > span > img {
  width: auto;
  height: 100%;
}
div.artist-cell > section {
  padding-left: 0.5em;
  text-align: left;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}
div.artist-cell > section > h3 {
  font-size: 1em;
  padding: 0;
  margin: 0;
}

label.second-line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
}
label.second-line > * {
  font-size: 0.8em;
  padding-right: 0.2em;
}

span.cities {
  overflow-y: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
}
span.cities > * {
  font-style: italic;
  padding-right: 0.2em;
}
</style>
