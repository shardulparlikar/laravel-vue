<template>
<div>

<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline" @submit.prevent>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="setSelectedTab('Login')">{{ afterLogin}}</button>
  </form>
</nav>
<!-- <HomePage></HomePage>
<Login></Login> -->
<keep-alive>
<component :is="showPopUp"></component>
</keep-alive>
</div>
  
</template>

<script>
import HomePage from './HomePage.vue'
import Login from './Login.vue'


export default {
components : {HomePage,Login},
data() {
	return {
		showPopUp : 'HomePage',
		afterLogin : 'Login'
	}
},
methods: {
	setSelectedTab(cmp){
		this.showPopUp=cmp
		this.afterLogin='LogOut'
	}
},
}
</script>

<style>

</style>