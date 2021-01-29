import styled from 'styled-components';

export const EstiloDados = styled.div`
th,td{
    padding: 5px 40px 5px;
    text-align:center;
}

table{
    border: 1px solid #000;
    margin:0 45px 0;
    
}
.areabutt{
    display:flex;
    justify-content:center;
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
    cursor:pointer

}
.bhome:hover,.bfinal:hover{
    background-color:#7fff19;
}


.bfinal{
    width:200px;
    padding:10px;
    margin:10px;
    background-color:#24f819;
    font-weight: bold;
    cursor:pointer
}
.actions{
    display:flex;
    padding:10px;
    justify-content:space-between;
    line-height:100px
}
input{
    cursor:pointer;
}

`