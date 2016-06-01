<style>


.modal-mask {
  overflow-y: auto;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: table;
  -webkit-transition: opacity .3s ease;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: #fff;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}

.modal-header h3 {

}

.modal-container > .modal-header > h1 {

}

.modal-body {

}

.modal-default-button {
  position: fixed;
  right: 0;
}


.modal-enter, .modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
