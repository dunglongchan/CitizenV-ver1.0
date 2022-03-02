const passport = require("passport");
// load user model
const User = require("../../app/models/user");
const LocalStrategy = require("passport-local").Strategy;
// passport session setup
// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
// local sign-up

// local sign-in
passport.use(
    "local.signin",
    new LocalStrategy({
            // mặc định local strategy sử dụng username và password chúng ta có thể cấu hình lại
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true,
            // cho phép chúng ta gửi reqest lại hàm callback
        },
        function(req, username, password, done) {

            // tìm một user với email
            // chúng ta sẽ kiểm tra xem user có thể đăng nhập không
            User.findOne({ username: username }, function(err, user) {
                if (err) {
                    return done(err);
                }
                // Nếu không có user thì in ra lỗi
                if (!user) {
                    return done(null, false, { message: "Not user found" });
                }
                return done(null, user);
            });
        }

    )
);