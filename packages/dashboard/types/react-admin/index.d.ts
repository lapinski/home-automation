declare module 'react-admin' {
    import { FunctionComponent } from 'react';
    import { AdminProps } from 'ra-core';
    
    // Type Shims to allow use of 'react-admin' (until they support types).
    declare var Admin: FunctionComponent<AdminProps>;
};
