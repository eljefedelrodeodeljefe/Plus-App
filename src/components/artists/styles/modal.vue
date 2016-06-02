<style>

/*body {
  position: fixed;
}*/
/* The Modal (background) */
.modal {
  z-index: 10;
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow-y: auto; /* Enable scroll if needed */

  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  overflow-y: hidden;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 100%;
  height: 100%;
  /*box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);*/
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {opacity:0}
  to {opacity:1}
}

@keyframes animatetop {
  from {opacity:0}
  to {opacity:1}
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {
  margin-bottom: 10em;
  margin-left: 0;
  margin-right: 0;
  max-height:100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

section.availability {
  margin-top: 3em;
}

section.availability h2 {
  margin-left: 0.6em;
}


</style>
