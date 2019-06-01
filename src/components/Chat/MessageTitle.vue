<template>
  <div class="title-container">
    <h1>POKI BOT</h1>
    <div class="guide">
      <button @click="open">?</button>

      <div id="myModal" class="modal" :class="{'modal-hidden': !isClicked}">
        <span @click="close" class="close">&times;</span>
        <img class="modal-content" src="../../assets/logo.png" id="img01">
        <div id="caption"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    open() {
      this.isClicked = true;
    },
    close() {
      this.isClicked = false;
    }
  }
};
</script>

<style scoped>
.title-container {
  padding: 16px;
  background: rgb(255, 210, 84);
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.title-container h1 {
  font-weight: bold;
  color: white;
  flex: 1
}

.guide {
   font-weight: bold;
  color: white; 
}

.modal-hidden {
  display: none !important; /* Hidden by default */
}

.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
