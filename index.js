ReactDOM.render(
    <html>
    <head>

        <link rel="stylesheet" href="index.css">

    </head>

    <body>

            <div class="login-div">
                <div class="logo">
                    <img src="logo.jpg" alt="" width="120">
                </div>

                <div class="title">Black Matrix</div>
                <div class="sub-title">Technology & Design</div>

                <div class="form">

                    <div class="username">
                        <input type="text" placeholder="Username or Email">
                    </div>

                    <div class="password">
                        <input type="password" placeholder="Password">
                    </div>

                    <div class="options">
                        <div class="remember-me"></div>
                        <input id="remember-me" type="checkbox">
                        <label for="remember-me">Remember Me?</label>
                    </div>
                    
                    <div class="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button class="signin-btn">LOGIN</button>
                    <div class="sign-up">
                        <a href="#"> New to Black Matrix? Sign up here.</a>
                    </div>

                </div>

            </div>


    </body>
</html>,
    document.getElementById("root")
)