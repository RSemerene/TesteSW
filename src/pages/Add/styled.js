import styled from 'styled-components';

export const New = styled.div`

display:flex;
justify-content:center;
flex-direction:column;
align-items:center;


    .areabutt{
        display:flex;
        justify-content:center;
    }

    form{
        
        display:flex;
        justify-content:center;
        flex-direction: column;
        border: 1px solid #ddd;
        margin-bottom:20px;
    }
    label{
        padding:10px;
        display:flex;
        justify-content:center;
        flex-direction: column;
    }

    input{
        outline:none;
        width:200px;
        height:30px;
        
    }

    button {
        width:200px;
        padding:10px;
        margin:10px;
        background-color:#24f819;
        font-weight: bold;
    }
    .bhome{
        width:99px;
        background-color:#24f819;
        font-weight: bold;
    
    }
    .bhome:hover, button:hover{
        background-color:#7fff19;
    }
    h2{
        margin:10px;
        font-size:25px
    }
`
