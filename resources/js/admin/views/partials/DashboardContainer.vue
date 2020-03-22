<template>
	<div>
			<!-- begin::Page loader -->
            <!-- <router-link v-if="authenticated" to="/login"  @logoutHandle="logoutHandle" replace>Logout</router-link> -->

	<loader></loader>

			<!-- end::Page Loader -->

			<!-- begin:: Page -->
			<div class="m-grid m-grid--hor m-grid--root m-page">

				<!-- begin::Header -->
		<app-header></app-header>

				<!-- end::Header -->

				<!-- begin::Body -->
				<div class="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop m-page__container m-body">
					<div class="m-grid__item m-grid__item--fluid m-wrapper">

						<!-- BEGIN: Subheader -->
						<sub-header></sub-header>

						<!-- END: Subheader -->
						<!-- begin content-->
							 <div class="m-content">

								<router-view />
							</div>

							<!-- end content-->
					</div>
				</div>

				<!-- end::Body -->

				<!-- begin::Footer -->
				<ffooter></ffooter>
				<!-- end::Footer -->
			</div>

			<!-- end:: Page -->

			<!-- begin::Quick Sidebar -->
			<sidebar></sidebar>

			<!-- end::Quick Sidebar -->

			<!-- begin::Scroll Top -->
		<scrolltop></scrolltop>
			<!-- end::Scroll Top -->

			<!-- begin::Quick Nav -->
			<qnav></qnav>
			<!-- begin::Quick Nav -->




   <!-- <router-view @authenticated="setAuthenticated" /> -->
   </div>
</template>
<script>
export default {

}
</script>
