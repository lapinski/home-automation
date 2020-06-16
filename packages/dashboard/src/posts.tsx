import * as React from "react";
import {
    List,
    Datagrid,
    Edit,
    EditButton,
    TextField,
    TextInput,
    ReferenceField,
    SimpleForm
} from 'react-admin';

export const PostList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);


const PostTitle = ({ record }: { record?: { title: string }}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props: any) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceField label="User" source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);
