import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
}

body{
    background:${({theme})=>theme.background};
    color: ${({theme})=>theme.title};
    padding:0;
    margin:0;
    transition: all 0.25s linear;
    overflow-y: scroll;
}

body::-webkit-scrollbar{
    display: none;
}

.canvas{
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto;
    gap: 0.5rem;
    padding:2rem;
    width:100vw;
    text-align: center;
    align-items: center;
}

.type-box{
    display:block;
    max-width: 1000px;
    height: 140px;
    margin-left:auto;
    margin-right:auto;
    overflow: hidden;
}

.words{
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    align-content:center;
    color: ${({theme})=>theme.typeBoxText}
}

.word{
    margin: 5px;
    padding-right:2px;
}

.hidden-input{
    opacity:0;
}

.correct{
    color: ${({theme})=>theme.title};
}

.incorrect{
    color: red;
}

.current{
    border-left: 1px solid;
    animation: blinkingLeft 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingLeft{
        0% {border-left-color:white;}
        25% {border-left-color:black;}
        50% {border-left-color:white;}
        75% {border-left-color:black;}
        100% {border-left-color:white;}
    }
}

.right-current{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingRight{
        0% {border-right-color:white;}
        25% {border-right-color:black;}
        50% {border-right-color:white;}
        75% {border-right-color:black;}
        100% {border-right-color:white;}
    }
}

.skipped{
    color: grey;
}

.footer{
    display: flex;
    flex-direction: column;
    align-self: end;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.actual-footer{
    display: flex;
    justify-content: space-between;
}


.stats-box{
    display: flex;
    max-width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}

.left-stats{
    width: 30%;
    padding: 30px;
    color: ${({theme})=>theme.typeBoxText};
}


.right-stats{
    width: 70%;
}

.title{
    font-size: 20px;
    color: ${({theme})=>theme.typeBoxText};
}

.subtitle{
    font-size: 30px;
    color: ${({theme})=>theme.title};
}

a{
    text-decoration: none;
    color: inherit;
}
.upper-menu{
    display:flex;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    justify-content:space-between;
    font-size:1.35rem;
    padding:0.5rem;
}

.modes{
    cursor: pointer;
    
}
.time-modes .word-modes{
    display:flex;
    cursor: pointer;
}
.time {
    margin-right:5px;
    cursor:pointer;
}

.no-of-word{
    margin-right:5px;
    cursor:pointer;
}

.header{
    display: flex;
    width: 1000px;
    align-self: stretch;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
}

.github-button{
    width: 400px;
    text-align: center;
    background: blue;
    height: 3rem;
    border: 2px solid;
    border-radius: 10px;
}

.user-profile{
    width: 1000px;
    margin: auto;
    display: flex;
    min-height: 15rem;
    background: ${({theme})=>theme.typeBoxText};
    border-radius: 20px;
    justify-content: center;
    align-text: center;
    
}
.user{
    width: 50%;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 1.5rem;
    padding: 1rem;
    border-right: 2px solid;
    
}
.info{
    width: 60%;
    padding: 1rem;
    margin-top: 1rem;
}
.picture{
    width: 40%;
    
}
.total-tests{
    width: 50%;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.graph, .table{
    width: 1000px;
    margin: auto;
}
.center-of-screen{
    display:flex;
    min-height:100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3rem;
}

.logo{
    display: flex;
    gap: 10px;
}
.compare-btn{
    cursor: pointer;
    color: ${({theme})=>theme.background};
    background: ${({theme})=>theme.title};
    padding: 0.3rem;
    border-radius: 5px;
    margin-top: 17px;
}

#spanOr{
    display: flex;
    justify-content: center;
}

.spanOr{
    margin-top: 10px;
}

.user-logo{
    cursor: pointer;
}
.instruction{
    color: ${({theme})=>theme.title};
}
.hint{
    kbd{
        background: ${({theme})=>theme.title};
        color: ${({theme})=>theme.background};
        padding: 2.5px 5px;
        border-radius: 4px; 
    }
}

.restart{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    cursor: pointer;
    font-size: 25px;    
}


.compareData{
    height: 98vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
}

#currentUserGraph{
    display: flex;
    justify-content: start;
    font-size: 30px;
    margin-top: -40px;
}

#comparedUserGraph{
    display: flex;
    justify-content: start;
    font-size: 30px;
    margin-top: -40px;
}

.compareHeader{
    text-align: center;
    font-size: 40px;
    margin-top: 20px;
    text-decoration: underline;
}

.homeBtn{
    text-align: center;
    margin-top: -110px;
    display: flex;
    justify-content: center;
    gap: 20px;
   
}

.homeBtn button{
    background-color: ${({theme})=>theme.title};
    font-size: 30px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
}

.backHome{
    background-color: ${({theme})=>theme.title};
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    position: fixed;
    top: 5%;
    left: 4%;
}
`;