import React, {useEffect, useState} from 'react';
import "./Sidebar.css"
import {Multiselect} from "multiselect-react-dropdown";
import Card from "./Card";

function SideBar({isMobile}) {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);

    // const handleSearch = (value) => {
    //     setLoading(true);
    //     const results = value ? tags.filter(w => w.toLowerCase().includes(value)) : []
    //     setTimeout(r =>{
    //         setTags(r);
    //         setLoading(false)
    //     }, 400, results)
    // }

    useEffect(() => {
        async function handleRequest (){
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
        return ('#'+val.toUpperCase());
    }

    return (
        <>
            <div className={isMobile ? 'sidebar-holder-mobile' : 'sidebar-holder'}>
                <form>
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

                    />

                </form>
            </div>
        </>
    );
}

export default SideBar;