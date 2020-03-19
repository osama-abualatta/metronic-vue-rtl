<template>
  		<header id="m_header" class="m-grid__item m-header " m-minimize="minimize" m-minimize-mobile="minimize" m-minimize-offset="10" m-minimize-mobile-offset="10">
					<div class="m-header__top">
						<div class="m-container m-container--fluid m-container--full-height m-page__container">
							<div class="m-stack m-stack--ver m-stack--desktop">

								<!-- begin::Brand -->
                                    <brand></brand>
								<!-- end::Brand -->

								<!-- begin::Topbar -->
                                <topbar @logoutHandle="logoutHandle"></topbar>

								<!-- end::Topbar -->
							</div>
						</div>
					</div>
                    <m-header></m-header>
				</header>

</template>

<script>
export default {
methods :{
    logoutHandle(){
        this.$emit('logoutHandle')
    }

}
}
</script>

<style>

</style>
