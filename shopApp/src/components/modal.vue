<template>
  <div style="display: block;">

    <div class="md-modal modal-msg md-modal-transition"
         v-bind:class="{'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close"
                  @click="closeModal">关闭</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay"
         v-if="mdShow"
         @click="closeModal"></div>
  </div>

</template>
<script>

export default ({
  props: ["mdShow"],
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
})
</script>
<style scoped>
.btn.btn--dis,
.btn[href].btn--dis {
  border-color: #ccc;
  background: transparent;
  color: #ccc;
  cursor: default;
}

.btn.btn--dis:hover {
  border-color: #ccc !important;
  background: transparent !important;
  color: #ccc !important;
}

.btn--red.btn--dis,
.btn--red[href].btn--dis {
  border-color: #ccc;
  background-color: #ccc;
  color: #fff;
  cursor: default;
}

.btn--red.btn--dis:hover {
  border-color: #ccc !important;
  background: #ccc !important;
  color: #fff !important;
}

.btn {
  height: 55px;
  line-height: 54px;
  padding: 0 10px;
}

.btn,
.btn[href] {
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-family: "moderat", sans-serif;
  font-weight: bold;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  border: 1px solid #d1434a;
  color: #d1434a;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  white-space: nowrap;
}

.btn:hover,
.btn[href]:hover {
  background-color: #ffe5e6;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.btn--red,
.btn--red[href] {
  background-color: #d1434a;
  border-color: #d1434a;
  color: #fff;
}

.btn--red:hover,
.btn--red[href]:hover {
  background-color: #f16f75;
  border-color: #f16f75;
  color: #fff;
}

.btn--m {
  height: 40px;
  line-height: 40px;
}
.md-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 535px;
  height: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  visibility: hidden;
  z-index: 201;
}

.md-modal.md-modal-m {
  width: 620px;
}

.md-modal .md-close {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 34px;
  height: 34px;
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
  text-indent: -8000px;
}

.md-modal .md-close:before,
.md-modal .md-close:after {
  position: absolute;
  top: 16px;
  left: -4px;
  content: "";
  width: 44px;
  height: 3px;
  background: #d7d8dd;
  -webkit-transition: -webkit-transform 0.5s ease-out;
  transition: -webkit-transform 0.5s ease-out;
  transition: transform 0.5s ease-out;
  transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;
}

.md-modal .md-close:before {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.md-modal .md-close:after {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.md-modal .md-close:hover:before,
.md-modal .md-close:hover:after {
  -webkit-transition: -webkit-transform 0.3s ease-out;
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
}

.md-modal .md-close:hover:before {
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.md-modal .md-close:hover:after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.md-modal .md-tit {
  font-weight: 200;
  line-height: 1.8em;
  text-align: center;
}

.md-modal .md-modal-inner {
  padding: 60px 50px;
}

.md-modal .btn-wrap {
  margin-top: 20px;
  text-align: center;
  font-size: 0;
  /* clear: both; */
}
.md-modal .btn-wrap div {
  /* clear: both; */
  width: 280px;
  height: 50px;
  text-align: center;
  margin: 0 auto;
}
.md-modal .btn-wrap .btn {
  width: 35%;
  min-width: 80px;
  margin: 0 2.5%;
  /* float: left; */
}

.md-modal .confirm-tips,
.md-modal .alert-tips {
  font-size: 14px;
  font-weight: 200;
  text-align: center;
}

.md-modal .confirm-tips p,
.md-modal .alert-tips p {
  line-height: 1.8em;
}

.md-modal .confirm-tips {
  min-height: 5.65em;
}

.md-modal .alert-tips {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 10.25em;
  -ms-flex-align: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.md-modal .alert-tips p {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.md-modal.modal-normal .content-tit {
  margin-bottom: 20px;
  line-height: 20px;
  font-size: 16px;
  color: #333;
}

.md-modal .icon-status-ok {
  width: 20px;
  height: 20px;
  fill: #ee7a23;
  vertical-align: middle;
  margin-right: 15px;
}

.md-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
}

.md-modal-transition .md-modal-inner {
  background: #fff;
  -webkit-transform: translateY(20%);
  -ms-transform: translateY(20%);
  transform: translateY(20%);
  opacity: 0;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.md-modal-transition.md-show {
  visibility: visible;
}

.md-modal-transition.md-show .md-modal-inner {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
</style>
