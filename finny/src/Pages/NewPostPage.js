import React, {useCallback, useEffect, useState} from 'react';
import validateInfo from "../Validators/validate";
import useForm from "../Hooks/useForm";

import "./LogInPage.css";
import "../Components/Sidebar.css"
import {Link, useNavigate} from "react-router-dom";
import {Multiselect} from "multiselect-react-dropdown";


function RegisterPage({setToken}) {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);
    const [request, setRequest] = useState();
    const nav = useNavigate();

    async function newPost(post) {
        console.log(post);
        let response = await fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json());
        console.log(response);
        nav("/");
    }


    const submitEvent = () => {
    }

    const Post = useForm(submitEvent, validateInfo);

    useEffect(() => {
        async function handleRequest() {
            setTags(await requestTags());
            setLoading(false)
        }

        handleRequest().then();
    }, []);

    async function requestTags() {
        setLoading(true);
        return fetch("http://localhost:8080/tags")
            .then(response => response.json())
    }

    function reformat(val) {
        return ('#' + val.toUpperCase());
    }
    const handleSelect = (selectedList, selectedItem) => {
    }

    function handleRemove() {
    }

    return (

        <form className="new-post-container"
              onSubmit={Post.handleSubmit}
        >
            <h2>Your new post:</h2>
            <div className='form-inputs'>
                <label className='form-label'>Post's title:</label>
                <input
                    className='title-input'
                    type='text'
                    name='title'
                    placeholder='Enter your first name'
                    value={Post.values.title}
                    onChange={Post.handleChange}
                />
                {Post.errors.title && <p>{Post.errors.title}</p>}
            </div>

            <div className='form-inputs'>
                <label className='form-label'>Post's description:</label>
                <textarea
                    className="description-input"
                    name="description"
                    placeholder='Enter your last name'
                    value={Post.values.lastName}
                    onChange={Post.handleChange}/>
                {Post.errors.description && <p>{Post.errors.description}</p>}
            </div>

            <Multiselect
                className='tag-select'
                options={tags}
                // onSearch={}
                displayValue="content"
                isObject={true}
                placeholder='Tags'
                optionValueDecorator={reformat}
                selectedValueDecorator={reformat}
                emptyRecordMsg={'No more tags!'}
                onSelect={handleSelect}
                onRemove={handleRemove}
            />

            <div className='form-inputs'>
                <label className='form-label'>Post's photo link:</label>
                <input
                    className="photo-input"
                    type="url"
                    name="photoLink"
                    value={Post.values.photoLink}
                    onChange={Post.handleChange}/>
                {Post.errors.photoLink && <p>{Post.errors.photoLink}</p>}
            </div>

            <input type="submit" value="Post" className='post-button' id='post-button'/>

        </form>
    );
}

export default RegisterPage;