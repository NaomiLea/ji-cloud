use super::ApiEndpoint;

use crate::{
    api::method::Method,
    domain::{
        auth::{RegisterRequest, RegisterSuccess, SigninSuccess, SingleSignOnSuccess},
        user::{OtherUser, UserLookupQuery, UserProfile},
    },
    error::{auth::RegisterError, EmptyError},
};

/// Sign in.
pub struct Signin;
impl ApiEndpoint for Signin {
    type Req = ();
    type Res = SigninSuccess;
    type Err = EmptyError;
    const PATH: &'static str = "/v1/login";
    const METHOD: Method = Method::Post;
}

/// Sign in via SSO.
pub struct SingleSignOn;
impl ApiEndpoint for SingleSignOn {
    type Req = ();
    type Res = SingleSignOnSuccess;
    type Err = EmptyError;
    const PATH: &'static str = "/v1/authorize";
    const METHOD: Method = Method::Post;
}

/// Register a new user.
pub struct Register;
impl ApiEndpoint for Register {
    type Req = RegisterRequest;
    type Res = RegisterSuccess;
    type Err = RegisterError;
    const PATH: &'static str = "/v1/user";
    const METHOD: Method = Method::Post;
}

/// Fetch a user's profile.
pub struct Profile;
impl ApiEndpoint for Profile {
    type Req = ();
    type Res = UserProfile;
    type Err = EmptyError;
    const PATH: &'static str = "/v1/user/me/profile";
    const METHOD: Method = Method::Get;
}

/// Find a user by username.
pub struct UserLookup;
impl ApiEndpoint for UserLookup {
    type Req = UserLookupQuery;
    type Res = OtherUser;
    type Err = EmptyError;
    const PATH: &'static str = "/v1/user";
    const METHOD: Method = Method::Get;
}
