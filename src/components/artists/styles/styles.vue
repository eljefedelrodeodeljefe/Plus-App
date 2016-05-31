<style>
div.artistlist-container {
  overflow-y: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
}

div.artistlist-container > nav.role {
  display: flex;
  flex-direction: row;
  height: 3em;
}
div.artistlist-container > nav.role > label {
  width: 50%;
  text-align: center;
  line-height: 3em;
  border-color: rgba(215, 215, 215, 1);
  border-width: thin;
  border-style: solid;
  border-radius: 0.1em;
}

div.artistlist-container > nav.role > label.artist {
  background-color: rgba(134, 237, 255, 1);
  margin-left: 0.1em;
  margin-right: 0.05em;
}

div.artistlist-container > nav.role > label.agent {
  background-color: rgba(238, 134, 255, 1);
  margin-right: 0.1em;
  margin-left: 0.05em;
}

section.artistlist-content {
  overflow-y: scroll;
  z-index: 2;
  box-shadow: 0 -0.3em 0.3em 0 rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  text-align: center;
  padding-top: 3em;
}

section.artistlist-content.artist {
  background: rgba(0, 125, 255, 1);
}
section.artistlist-content.agent {
  background: rgba(4, 46, 89, 1);
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

img.login.plus-icon {
  margin-left: auto;
  margin-right: auto;
  width: 6em;
  height: 6em;
  box-shadow: 0.2em 0.2em 0.5em 0 rgba(255,255,255,.44);
}

div.input {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
}
div.input > label {
  margin-top: 0.6em;
  font-size: 0.8em;
  color: rgba(187, 187, 187, 0.8);
}

div.input > input[type=text], div.input > input[type=password] {
  margin-top: 0.3em;
  width: 100%;
  padding: 0.7em 1em;
  display: inline-block;
  border: thin solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

div.input > input.break {
  margin-bottom: 1.5em;
}

div.input > label.bottom {
  text-align: center;
  line-height: 2.5em;
  color: white;
  margin-top: 0.5em;
  width: 100%;
  background-color: rgba(123, 214, 31, 1);
  height: 2.5em;
}

label.isActive {
  z-index: 3;
}

</style>
