ReactDOM.render(
    <html>
    <head>

        <link rel="stylesheet" href="index.css" />

    </head>

    <body>

            <div class="login-div">
                <div class="logo">
                    <img src="logo.jpg" alt="" width="120" />
                </div>

                <div class="title">Welcome</div>
                <div class="sub-title">Midtown Moving & Storage LLC</div>

                <div class="form">

                    <div class="username">
                        <input type="text" placeholder="Username or Email" />
                    </div>

                    <div class="password">
                        <input type="password" placeholder="Password" />
                    </div>

                    <div class="options">
                        <div class="remember-me">
                            <input id="remember-me" type="checkbox" />
                            <label for="remember-me">Remember Me?</label>
                        </div>

                        <div class="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>        
                    
                    <button class="signin-btn">LOGIN</button>
                        <div class="sign-up">
                            <a href="#">New to Midtown Moving? Contact help here!</a>
                        </div>

                </div>

            </div>


    </body>
</html>,
    document.getElementById("root")
)