import axios from "axios"
import { useEffect, useRef, useState } from "react"

// TDataCards = {
//     cards: Number

// }
export default function ApiCards() {
    const [cards, setCard] = useState([])
    const [ number, setNumber] = useState([])
    const [ cod, setCod] = useState('')
   

   async function reloadCod(){
    
    const {data} = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        setCod(data.deck_id)
    }
    useEffect(()=>{ reloadCod()},[cards])
    async function getCards() {
        const {data} = await axios.get(`https://deckofcardsapi.com/api/deck/${cod}/draw/?count=1`)
        setCard((oldArray) => [...oldArray, data.cards]);
        var numberOfCard = data.cards[0].value;

        switch (numberOfCard) {
        case 'QUEEN':
            numberOfCard = '12'
            break;
        case 'ACE':
            numberOfCard = '1'
            break;
        case 'KING':
            numberOfCard = '13'
            break;
        case 'JACK':
            numberOfCard = '11'
            break;
        }
        
        setNumber((oldState) => [...oldState,numberOfCard]);
    }
    
    
    function handleAddCard(){
        getCards();
    }
    
    var soma = 0
    for(var i = 0; i < number.length; i++){
        let passNumber = Number(number[i])
        soma += passNumber
    }
    function handleStop(){
        if(soma >= 0 && soma <= 10) {
            alert("Treine mais")
        } else if( soma >= 11 && soma <= 20) {
            alert("HMM, ta quase lá")
        } else if(soma == 21){
            alert("MANDOU MUITO")
        }   
        else{
            alert("eita meu fi, tenta de novo :v")
        }

    }

    function handleClean(){
        setNumber([])
        setCard([])
    }


    return(
        <>
        <h1>Bem vindo ao  21</h1>
        <button onClick={handleClean}>Reiniciar</button>
        <button onClick={handleAddCard}>Clique para adicionar uma carta</button>
        <button onClick={handleStop}>Parar</button>
        <br/>
        <h2>valor total da soma é: {
        soma}</h2>
        <br/>
            {cards.map((card) =>{
                return(
                    <button key={Math.random()}>
                        <img src={card[0].image}/>
                        <h3>{card[0].value}</h3>

                    </button>
                )
            })}



        </>
    )
}