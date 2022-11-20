import React, {useEffect, useRef, useState} from 'react';
import "./Sidebar.css"
import {Multiselect} from "multiselect-react-dropdown";
import {useNavigate} from "react-router-dom";

function SideBar({isMobile, setTag, setOffset, setCount, setUserData, token}) {
    const [tags, setTags] = useState([]);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(false);
    const multiSelect = useRef();
    const nav = useNavigate();

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
        // console.log(selectedItem);
        reset();
        setTag(selectedItem.id)
    }

    function reset() {
        setUserData([]);
        setCount(0);
        setOffset(0);
    }

    function handleRemove() {
        reset();
        setTag(-1);
    }

    return (
        <>
            <div className={isMobile ? 'sidebar-holder-mobile' : 'sidebar-holder'}>

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
                    singleSelect={true}
                    onSelect={handleSelect}
                    onRemove={handleRemove}
                    ref={multiSelect}
                />
                {
                    token ?
                    <input
                        className='add-post'
                        type="button"
                        value="Create a post"
                        onClick={() => nav("/new-post")}
                    />
                        : null
                }

            </div>
        </>
    );
}

export default SideBar;