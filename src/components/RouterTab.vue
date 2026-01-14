<script setup>

</script>
<template>
    <div class="tabs is-centered">
  <ul>
    <li :class="{'is-active': $route.path === '/'}"><RouterLink to="/">ToDo</RouterLink></li>
    <li :class="{'is-active': $route.path === '/modals'}"><RouterLink to="/modals">Modals</RouterLink></li>
  </ul>
</div>
</template>