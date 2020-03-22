<template>
<div>
  	<div class="m-grid m-grid--hor m-grid--root m-page">
			<div class="m-grid__item m-grid__item--fluid m-grid m-grid--desktop m-grid--ver-desktop m-grid--hor-tablet-and-mobile m-login m-login--6" id="m_login">
				<div class="m-grid__item   m-grid__item--order-tablet-and-mobile-2  m-grid m-grid--hor m-login__aside " style="background-image: url(../../../../../../public/assets/app/media/img/bg/bg-4.jpg);">
					<div class="m-grid__item">
						<div class="m-login__logo">
							<a href="#">
								<img src="../../../../../../public/assets/app/media/img/logos/logo-4.png">
							</a>
						</div>
					</div>
					<div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver">
						<div class="m-grid__item m-grid__item--middle">
							<span class="m-login__title">Whatever CTA's wave purpose important exit element</span>
							<span class="m-login__subtitle">Lorem ipsum amet estudiat</span>
						</div>
					</div>
					<div class="m-grid__item">
						<div class="m-login__info">
							<div class="m-login__section">
								<a href="#" class="m-link">copy 2018 Metronic</a>
							</div>
							<div class="m-login__section">
								<a href="#" class="m-link">Privacy</a>
								<a href="#" class="m-link">Legal</a>
								<a href="#" class="m-link">Contact</a>
							</div>
						</div>
					</div>
				</div>
				<div class="m-grid__item m-grid__item--fluid  m-grid__item--order-tablet-and-mobile-1  m-login__wrapper">

					<!--begin::Head-->
					<div class="m-login__head">
						<span>Don't have an account?</span>
						<a @click="reg" class="m-link m--font-danger">Sign Up</a>
					</div>

					<!--end::Head-->

					<!--begin::Body-->
					<div class="m-login__body">

						<!--begin::Signin-->
						<div class="m-login__signin">
							<div class="m-login__title">
								<h3> Account</h3>
							</div>

							<!--begin::Form-->
							<form class="m-login__form m-form" action="">
								<div class="form-group m-form__group">
									<input class="form-control m-input" type="email" placeholder="email" name="email" autocomplete="off" v-model="input.email">
								</div>
								<div class="form-group m-form__group">
									<input class="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" v-model="input.password">
								</div>
							</form>

							<!--end::Form-->

							<!--begin::Action-->
							<div class="m-login__action">
								<a href="#" class="m-link">
									<span>Forgot Password ?</span>
								</a>
								<a href="#">
									<button  id="m_login_signin_submit"  class="btn btn-primary m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary" @click="signin">Sign In</button>
								</a>
							</div>

							<!--end::Action-->

							<!--begin::Divider-->
							<div class="m-login__form-divider">
								<div class="m-divider">
									<span></span>
									<span>OR</span>
									<span></span>
								</div>
							</div>

							<!--end::Divider-->

							<!--begin::Options-->
							<div class="m-login__options">
								<a href="#" class="btn btn-primary m-btn m-btn--pill  m-btn  m-btn m-btn--icon">
									<span>
										<i class="fab fa-facebook-f"></i>
										<span>Facebook</span>
									</span>
								</a>
								<a href="#" class="btn btn-info m-btn m-btn--pill  m-btn  m-btn m-btn--icon">
									<span>
										<i class="fab fa-twitter"></i>
										<span>Twitter</span>
									</span>
								</a>
								<a href="#" class="btn btn-danger m-btn m-btn--pill  m-btn  m-btn m-btn--icon">
									<span>
										<i class="fab fa-google"></i>
										<span>Google</span>
									</span>
								</a>
							</div>

							<!--end::Options-->
						</div>

						<!--end::Signin-->
					</div>

					<!--end::Body-->
				</div>
			</div>
		</div>

<div>

</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
            data() {
            return {
                input: {
                    email: "",
                    password: ""
                }
            }
            },
 methods :{
     signin(){
         axios.post('https://reqres.in/api/login', {
                email: this.input.email,
                password: this.input.password
            }
            )
  .then((response) => {
      console.log(response);
            //   if(this.input.email != "" && this.input.password != "") {
            //        if(this.input.email == this.email && this.input.password == this.password) {
                     //  this.$emit("signin", true);

        this.$router.push('/dashboard');
            //           //  this.$router.replace("layout");
            //         }
            //         else{

            //         }
                    }
  )
  .catch(function (error) {
    console.log(error);
  })
        //    if(this.input.username != "" && this.input.password != "") {
        //             if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
        //                 this.$emit("signin", true);
        //               //  this.$router.replace("layout");
        //             }
        //             else {
        //                 console.log("The username and / or password is incorrect");
        //             }
        //         } else {
        //             console.log("A username and password must be present");
        //         }
     },
     reg(){
           this.$router.push('/signup');

     }
 }
}
</script>

<style>

</style>
