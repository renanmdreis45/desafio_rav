import React from "react";
import {Container, Header, Interface} from "./style";
import {AddMovement} from '../components/AddMov';
import {MovementList} from '../components/MovementList'
import {ColumnChart} from "../components/ColumnChart";
import { GlobalProvider } from "../context/global";


export default function Home() {
    

    return(
       <>
          <GlobalProvider>
            <Container>
                <Header>
                  <h2> CONTROLE DE CAIXA </h2>
                </Header>
                <Interface>
                  <AddMovement />
                  <MovementList />
                  <ColumnChart />
                </Interface>
             </Container>           
            </GlobalProvider>
         
       </>
    );
}
