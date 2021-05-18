<template>
  <div>
    <v-row class="align-stretch justify-center pt-5 pb-5">
      <v-col cols="12" lg="6">
        <div class="height-100 d-flex flex-column justify-space-around">
          <div :style="$vuetify.breakpoint.smAndDown ? 'height: 250px;' : ''">
            <h1 class="pb-4 white--text">Investing made Simple.</h1>
            <p class="white--text">
              FinPocket is an application for those who want to discuss, analyze
              and invest in Stocks on the Pakistan Stock Exchange - PSX.
            </p>
          </div>
          <div :class="{ 'pt-7': !$vuetify.breakpoint.smAndDown }">
            <p class="caption">Powered By</p>
            <img src="@/assets/fortune.webp" alt="" />
            <p class="caption">
              <a
                href="http://www.fortunesecurities.com/pdf/Broker%20License%202019.pdf"
                >(See License)</a
              >
            </p>
            <p class="caption">
              Fortune Securities Limited is registered and supervised by:
            </p>
            <div
              class="d-flex"
              :class="{ 'justify-center': $vuetify.breakpoint.smAndDown }"
            >
              <a href="https://www.secp.gov.pk/"
                ><img
                  src="@/assets/SECP.svg"
                  class="pr-5 pl-5"
                  height="70"
                  alt=""
              /></a>
              <a href="https://www.psx.com.pk/"
                ><img
                  src="@/assets/psx.svg"
                  class="pr-5 pl-5"
                  height="70"
                  alt=""
              /></a>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="3" class="d-flex justify-center">
        <img src="@/assets/Title-1.gif" height="500" alt="" />
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="align-stretch justify-center pt-5 pb-5">
      <v-col cols="9">
        <v-form>
          <v-container>
            <v-row :class="{ 'flex-column': $vuetify.breakpoint.smAndDown }">
              <v-col
                cols="12"
                lg="3"
                class="d-flex align-center justify-center"
                :class="{ 'pr-0': !$vuetify.breakpoint.smAndDown }"
              >
                <v-text-field
                  outlined
                  v-model="fullname"
                  :rules="nameRules"
                  label="Full name"
                  required
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                lg="3"
                class="d-flex align-center justify-center"
              >
                <v-text-field
                  outlined
                  type="email"
                  v-model="email"
                  :rules="nameRules"
                  label="Email"
                  required
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                lg="2"
                class="d-flex align-center justify-center"
              >
                <v-btn @click="submit" rounded color="primary">Start Investing</v-btn>
              </v-col>

              <v-col
                cols="12"
                lg="1"
                class="d-flex align-center justify-center"
              >
                <v-divider
                  :vertical="!$vuetify.breakpoint.smAndDown"
                ></v-divider>
              </v-col>

              <v-col
                cols="12"
                lg="3"
                class="d-flex align-center justify-center"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.fyntros.android"
                  target="_blank"
                  ><img src="@/assets/gplay.webp" width="200" alt=""
                /></a>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <!-- slide 2 -->
    <v-row class="align-stretch justify-center mt-5 mb-5">
      <v-col
        cols="12"
        lg="6"
        :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
      >
        <div
          class="height-100 d-flex flex-column justify-center"
          :class="{ 'align-center': $vuetify.breakpoint.smAndDown }"
        >
          <h1>Easy Transactions in 3 Steps.</h1>
          <img
            src="@/assets/steps.png"
            :width="$vuetify.breakpoint.smAndDown ? 300 : 550"
            alt=""
          />
          <p>
            Designed for young investors, you can easily invest in well-know
            stocks to achieve you financial freedom.
          </p>
        </div>
      </v-col>
      <v-col cols="3" class="d-flex justify-center">
        <img src="@/assets/order.gif" height="500" alt="" />
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="align-stretch justify-center pt-10 pb-10">
      <h1
        class="mb-5"
        :class="{ 'pr-3 pl-3 text-center': $vuetify.breakpoint.smAndDown }"
      >
        Invest in Pakistan's Best Companies.
      </h1>
      <v-col cols="9" class="text-center">
        <img
          v-for="index in 5"
          :key="index"
          :src="require(`@/assets/${index}.svg`)"
          width="146"
          alt=""
        />
        <img
          v-for="index in 7"
          :key="index"
          :src="require(`@/assets/${index}.jpg`)"
          width="146"
          alt=""
        />
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-row class="align-stretch justify-center mt-5 mb-5">
      <v-col
        cols="12"
        lg="4"
        class="d-flex justify-center"
        :class="{ 'mt-10 mb-10': !$vuetify.breakpoint.smAndDown }"
      >
        <img src="@/assets/minimum.gif" alt="" />
      </v-col>
      <v-col cols="12" lg="5">
        <div class="height-100 d-flex flex-column justify-center">
          <h1 class="mb-4">
            Register 100% Online, No Minimum investment, and quick Deposits and
            Withdrawal
          </h1>
          <p class="mb-4">
            Determine your own investment amount according to your goals and
            finances.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.fyntros.android"
            target="_blank"
            ><img
              :class="{ 'ma-auto': $vuetify.breakpoint.smAndDown }"
              src="@/assets/gplay.webp"
              width="200"
              alt=""
          /></a>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="align-stretch justify-center mt-5 mb-5">
      <v-col cols="12" class="d-flex align-center flex-column">
        <h1 class="mb-4">Learn First with Demo Trading</h1>
        <p>
          You can practice and test your investment strategy risk-free with 1
          million in virtual cash.
        </p>
        <img src="@/assets/Demo-1.gif" height="500" alt="" />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="align-stretch justify-center mt-5 mb-5">
      <v-col cols="12" lg="6">
        <div class="height-100 d-flex flex-column justify-center">
          <h1 class="mb-4">Invest Better, Invest Smarter</h1>
          <ul>
            <li>Complete Financial Data</li>
            <p>
              Support your analysis with the most complete and reliable data.
            </p>
            <li>Latest News &amp; Research Reports</li>
            <p>
              One place to read news and research reports from the best
              analysts.
            </p>
            <li>Join a Growing Stock Community</li>
            <p>Discuss and invest with others on the platform.</p>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" lg="3" class="d-flex justify-center">
        <v-carousel
          show-arrows-on-hover
          hide-delimiters
          cycle
          interval="10000"
          delimiter-icon="mdi-stop"
        >
          <v-carousel-item>
            <img src="@/assets/1.gif" height="500" alt="" />
          </v-carousel-item>

          <v-carousel-item>
            <img src="@/assets/2.gif" height="500" alt="" />
          </v-carousel-item>

          <v-carousel-item>
            <img src="@/assets/3.gif" height="500" alt="" />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      fullname: "",
    };
  },
  methods: {
    ...mapActions({
      submitForm: "index/submitForm",
    }),
    submit() {
      this.submitForm({
        fields: [
          {
            name: "email",
            value: this.email,
          },
        ],
        context: {
          pageUri: "www.example.com/page",
          pageName: "Example page",
        },
      });
    },
  },
};
</script>

<style>
.skewed {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 540px;
  background: rgb(0, 50, 109);
  background: linear-gradient(
    10deg,
    rgba(0, 50, 109, 1) 30%,
    rgba(0, 212, 255, 1) 100%
  );
  z-index: 0;
  transform: skewY(10deg);
  transform-origin: top right;
}
.background {
  background: rgb(0, 50, 109);
  background: linear-gradient(
    10deg,
    rgba(0, 50, 109, 1) 30%,
    rgba(0, 212, 255, 1) 100%
  );
}
.z-index {
  z-index: 1;
}
.height-100 {
  height: 100%;
}
.slide-height {
  height: calc(100vh - 180px);
}
.v-responsive__content {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

h1,
p,
li {
  color: #00326d;
}
p,
li {
  font-size: 18px;
}

@media only screen and (max-width: 1264px) {
  .skewed {
    height: 420px;
  }
  .row {
    margin: 0 !important;
  }
  h1 {
    font-size: 1.8em;
  }
}
</style>