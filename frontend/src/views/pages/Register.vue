<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <!-- <router-link to="/" class="d-flex align-center"> -->
          <v-img :src="require('@/assets/images/logos/pasonalogo.png')" max-height="100px" max-width="100px" alt="logo"
            contain></v-img>
        </v-card-title>

        <!-- title -->
        <v-card-text class="pt-0">
          <p class="text-xl font-weight-semibold text--primary mb-2">
            Register Form
          </p>
          <p class="text-xs mb-0">
            Create your request for an account by filling in this form. Our admin will verify and send you an email
            confirmation if your request is accepted.
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text class>
          <v-form ref="form">
            <v-text-field v-model="fullname" :rules="rules" label="Full name" placeholder="John Doe" required class="field"
              ></v-text-field>

            <v-text-field v-model="department" :rules="rules" label="Department" placeholder="Software" required class="field"
              ></v-text-field>

            <v-text-field v-model="employeeid"  :rules="rules" label="Employee ID" placeholder="212331111"
              required class="field"></v-text-field>

            <v-text-field v-model="email"  :rules="rules" label="Email" placeholder="john@pasona.vn" required class="field"
              ></v-text-field>

            <v-text-field v-model="password"  :type="isPasswordVisible ? 'text' : 'password'" label="Password"
              placeholder="············" :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :rules="rules" required @click:append="isPasswordVisible = !isPasswordVisible" class="field"></v-text-field>

            <v-checkbox required v-model="checkbox" :rules="rules" class="mt-1">
              <template #label>
                <div class="d-flex align-center flex-wrap">
                  <span class="me-2">I agree to</span><a href="javascript:void(0)" class="forgotpass">privacy policy &amp;
                    terms</a>
                </div>
              </template>
            </v-checkbox>

            <v-btn @click="signup" block class="signupbtn mt-2">
              Sign Up
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap">
          <span class="me-2">
            Already have an account?
          </span>
          <router-link :to="{ name: 'pages-login' }" class="forgotpass">
            Sign in instead
          </router-link>
        </v-card-text>

        <!-- divider -->
        <!-- <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text> -->

        <!-- social link -->
        <!-- <v-card-actions class="d-flex justify-center">
          <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img class="auth-mask-bg" :src="require(`@/assets/images/misc/banner.png`)">

  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  data() {
    return {
      isPasswordVisible: false,
      email: '',
      password: '',
      fullname: '',
      department: '',
      employeeid: '',
      checkbox: false,
      rules: [
        value => {
          if (value) return true
          return "This field can't be left empty."
        },
      ],
      socialLink: [
        {
          icon: mdiFacebook,
          color: '#4267b2',
          colorInDark: '#4267b2',
        },
        {
          icon: mdiTwitter,
          color: '#1da1f2',
          colorInDark: '#1da1f2',
        },
        {
          icon: mdiGithub,
          color: '#272727',
          colorInDark: '#fff',
        },
        {
          icon: mdiGoogle,
          color: '#db4437',
          colorInDark: '#db4437',
        },
      ],
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
  methods: {
    async signup() {
      const { valid } = await this.$refs.form.validate()

      if (this.fullname && this.employeeid && this.department && this.email && this.password && this.checkbox) {
        this.$router.push('/pages/login');
      }
    },
  }
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';

.signupbtn {
  background-color: darkred !important;
  color: white !important;
}

.forgotpass {
  color: darkred !important;
}

.auth-mask-bg {
  opacity: 0.9;
}
.field .v-input__control, 
.field .v-label {
  color:rgba(0, 0, 0, 0.712) !important
}
</style>
