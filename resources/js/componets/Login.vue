<template>
  <div class="login-page">
    <DashBoard v-if="nextComponent"></DashBoard>
    <div v-else class="container">
      <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
          <div class="col-lg-12 login-title">ADMIN PANEL</div>

          <div class="col-lg-12 login-form">
            <div class="col-lg-12 login-form">
              <form>
                <div class="form-group">
                  <label class="form-control-label">USERNAME</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="form-control-label">PASSWORD</label>
                  <input type="password" class="form-control" i />
                </div>

                <div class="col-lg-12 loginbttm">
                  <div class="col-lg-6 login-btm login-text"></div>
                  <div class="col-lg-6 login-btm login-button">
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      @click="setNextComponent"
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
          <facebook-login
            class="button"
            appId="326022817735322"
          
          >
          </facebook-login>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashBoard from "./DashBoard.vue";
import facebookLogin from "facebook-login-vuejs";

export default {
  components: { DashBoard, facebookLogin },
  data() {
    return {
      nextComponent: false,
    };
  },
  methods: {
    setNextComponent(e) {
      e.preventDefault();

      this.nextComponent = true;
    },
  },
};
</script>

<style scoped>
body {
  background: #222d32;
  font-family: "Roboto", sans-serif;
}

.login-box {
  margin-top: 75px;
  height: auto;
  background: #1a2226;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.login-title {
  margin-top: 15px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 15px;
  font-weight: bold;
  color: #de0d0d;
}

.login-form {
  margin-top: 25px;
  text-align: left;
}

input[type="text"] {
  background-color: #1a2226;
  border: none;
  border-bottom: 2px solid #de0d0d;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #de0d0d;
}

input[type="password"] {
  background-color: #1a2226;
  border: none;
  border-bottom: 2px solid #de0d0d;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #de0d0d;
}

.form-group {
  margin-bottom: 40px;
  outline: 0px;
}

.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #de0d0d;
  outline: 0;
  background-color: #1a2226;
  color: #de0d0d;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0;
}

label {
  margin-bottom: 0px;
}

.form-control-label {
  font-size: 10px;
  color: #6c6c6c;
  font-weight: bold;
  letter-spacing: 1px;
}

.btn-outline-primary {
  border-color: #de0d0d;
  color: #de0d0d;
  border-radius: 0px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
  background-color: #000000de;
  right: 0px;
}

.login-btm {
  float: left;
}

.login-button {
  padding-right: 0px;
  text-align: right;
  margin-bottom: 25px;
}

.login-text {
  text-align: left;
  padding-left: 0px;
  color: #de0d0d;
}

.loginbttm {
  padding: 0px;
}
</style>