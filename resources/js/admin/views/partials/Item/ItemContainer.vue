<template>
    <div>
<ul class="nav">

    <router-link class="nav-link " to="/dashboard/item/preview" tag="li" data-toggle="tab" aria-selected="true" active-class="active" exact><a>Preview</a></router-link>

    <router-link class="nav-link"  to="/dashboard/item/optionfeatures" tag="li" data-toggle="tab"  aria-selected="false" active-class="active"> <a>OptionsFeatures</a></router-link>

    <router-link class="nav-link"  to="/dashboard/item/evaluation" tag="li" data-toggle="tab"  aria-selected="false"  active-class="active"><a>Evaluation</a></router-link>

    <router-link class="nav-link " to="/dashboard/item/commit" tag="li" data-toggle="tab" aria-selected="false"  active-class="active"><a> Commit</a></router-link>

</ul>
<router-view/>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.nav-item{
        font-size: 20px;

    text-decoration: underline;
}
</style>
