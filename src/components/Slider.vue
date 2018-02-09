<template>
    <div v-loading.body="loading" class="main-gallery-wrap">
      <div class="big-slider">
        <div class="item">
          <div class="holder">
            <div class="info">
              <div class="date">Nov. 18, 2016 – Feb. 5, 2017</div>
              <div class="author">by <span>ROBERT HEINECKEN</span>. Object Matter1</div>
            </div>
            <div class="page-bg" style="background-image: url('../src/assets/slidervue.jpg')"></div>
          </div>
        </div>
        <div class="item">
          <div class="holder">
            <div class="info">
              <div class="date">Nov. 18, 2016 – Feb. 5, 2017</div>
              <div class="author">by <span>ROBERT HEINECKEN</span>. Object Matter1</div>
            </div>
            <div class="page-bg" style="background-image: url('./src/assets/slidervue1.jpg')"></div>
          </div>
        </div>
        <div class="item">
          <div class="holder">
            <div class="info">
              <div class="date">Nov. 18, 2016 – Feb. 5, 2017</div>
              <div class="author">by <span>ROBERT HEINECKEN</span>. Object Matter1</div>
            </div>
            <div class="page-bg" style="background-image: url('./src/assets/slidervue2.jpg')"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      setTimeout(() => {this.loading= false}, 1000)
    }
  }
</script>
