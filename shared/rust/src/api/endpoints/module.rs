use crate::{
    api::Method,
    domain::{
        jig::{
            module::{ModuleCreateRequest, ModuleResponse, ModuleUpdateRequest},
            ModuleId,
        },
        CreateResponse,
    },
    error::EmptyError,
};

use super::ApiEndpoint;

/// Get a Module by ID.
pub struct Get;
impl ApiEndpoint for Get {
    type Req = ();
    type Res = ModuleResponse;
    type Err = EmptyError;
    const PATH: &'static str = "/v1/module/{id}";
    const METHOD: Method = Method::Get;
}

/// Create a Module.
pub struct Create;
impl ApiEndpoint for Create {
    type Req = ModuleCreateRequest;
    type Res = CreateResponse<ModuleId>;
    type Err = EmptyError;
    const PATH: &'static str = "/v1/module";
    const METHOD: Method = Method::Post;
}

/// Update a Module.
pub struct Update;
impl ApiEndpoint for Update {
    type Req = ModuleUpdateRequest;
    type Res = ();
    type Err = EmptyError;
    const PATH: &'static str = "/v1/module/{id}";
    const METHOD: Method = Method::Patch;
}

/// Delete a Module.
pub struct Delete;
impl ApiEndpoint for Delete {
    type Req = ();
    type Res = ();
    type Err = EmptyError;
    const PATH: &'static str = "/v1/module/{id}";
    const METHOD: Method = Method::Delete;
}
