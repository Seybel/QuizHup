<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Sign Up</h5>
                        <form class="form-signin">
                            <div class="form-label-group">
                                <input v-model="email"
                                        type="email"
                                        id="inputEmail"
                                        class="form-control"
                                        placeholder="Email address" required autofocus>
                                <label for="inputEmail">Email address</label>
                            </div>

                            <div class="form-label-group">
                                <input v-model="password"
                                       type="password"
                                       id="inputPassword"
                                       class="form-control"
                                       placeholder="Password" required>
                                <label for="inputPassword">Password</label>
                            </div>

                            <div class="form-label-group">
                                <input v-model="confirmPassword"
                                       type="password"
                                       id="confirmPassword"
                                       class="form-control"
                                       placeholder="Password" required>
                                <label for="confirmPassword">Confirm Password</label>
                            </div>

                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                            <hr class="my-4">
                            <p class="lead">{{ message }}<a href="/#/login"> Sign in</a></p>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
            message: "Already have an account?",

            email: null,
            password: null,
            confirmPassword: null
        }
    }
}
</script>

<style lang="scss">
    p.lead {
        text-align: center;
        padding-bottom: 5px;
        padding-top: 5px;
        font-size: .9rem;
        color: $placeholder-color;
    }
    a {
        text-decoration: none !important;
    }
</style>