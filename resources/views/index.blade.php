<!DOCTYPE html>

<html lang="en">

	<!-- begin::Head -->
	<head>
		<meta charset="utf-8" />
		<title>Metronic | Dashboard</title>
		<meta name="description" content="Latest updates and statistic charts">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">

		<!--begin::Web font -->
		<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
		<script>
			WebFont.load({
            google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700","Asap+Condensed:500"]},
            active: function() {
                sessionStorage.fonts = true;
            }
          });
        </script>

		<!--end::Web font -->

		<!--begin::Global Theme Styles -->
    <link href="{{asset('/assets/vendors/base/vendors.bundle.css')}}" rel="stylesheet" type="text/css"  id="vendors"/>
    <link href="{{asset('/assets/vendors/base/vendors.bundle.rtl.css')}}" rel="stylesheet" type="text/css" id="vendors-rtl" />
		<!--RTL version:<link href="assets/vendors/base/vendors.bundle.rtl.css" rel="stylesheet" type="text/css" />-->
   <link href="{{asset('/assets/demo/demo10/base/style.bundle.css')}}" rel="stylesheet" type="text/css" id="style" />
   <link href="{{asset('/assets/demo/demo10/base/style.bundle.rtl.css')}}" rel="stylesheet" type="text/css"  id="style-rtl"/>
   <link href="{{asset('/css/app.css')}}" rel="stylesheet" type="text/css"  id="style-rtl"/>

		<!--end::Global Theme Styles -->



		<!--RTL version:<link href="assets/vendors/custom/fullcalendar/fullcalendar.bundle.rtl.css" rel="stylesheet" type="text/css" />-->

	</head>

	<!-- end::Head -->

	<!-- begin::Body -->
    <body
    class="m-page--fluid m-page--loading-enabled m-page--loading m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default">

<div id="app" >
	{{-- <LogIn><LogIn> --}}
        <layout></layout>
</div>

<script src="{{mix('js/app.js')}}"></script>
		<!--begin::Global Theme Bundle -->
<script src="{{asset('/assets/vendors/base/vendors.bundle.js')}}" type="text/javascript"></script>
<script src="{{asset('/assets/demo/demo10/base/scripts.bundle.js')}}" type="text/javascript"></script>
<script src="{{asset('/assets/snippets/custom/pages/user/login6.js')}}" type="text/javascript"></script>
 <script src="{{asset('/assets/snippets/custom/pages/user/login.js')}}" type="text/javascript"></script>

		<!--end::Global Theme Bundle -->



		<!--end::Page Scripts -->

		<!-- begin::Page Loader -->
		<script>
			$(window).on('load', function() {
				$('body').removeClass('m-page--loading');
			});
		</script>

		<!-- end::Page Loader -->
	</body>

	<!-- end::Body -->
</html>
