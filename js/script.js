let trabalho_atual = document.querySelector("#trabalho_atual")
let trabalho_previsto = document.querySelector("#trabalho_previsto")

let lazer_atual = document.querySelector("#laser_atual")
let lazer_previsto = document.querySelector("#laser_previsto")

let estudos_atual = document.querySelector("#estudos_atual")
let estudos_previsto = document.querySelector("#estudos_previsto")

let exercicios_atual = document.querySelector("#exercicios_atual")
let exercicicos_previsto = document.querySelector("#exercicicos_previsto")

let social_atual = document.querySelector("#social_atual")
let social_previsto = document.querySelector("#social_previsto")

let saude_atual = document.querySelector("#saude_atual")
let saude_previsto = document.querySelector("#saude_previsto")



document.addEventListener("DOMContentLoaded", () =>{
    dataFech_work()
})


const dataFech_work = async () =>{
    try{
        const res_work = await fetch("data.json")
        const data_work = await res_work.json()
        //console.log(data_work)
        

        //DELEGANDO EVENTOS
        document.addEventListener("click", (e) =>{
            //console.log(e.target.id)
            if(e.target.id === "Daily"){
                pintarDatosDaily(data_work)
            }else if (e.target.id === "Weekly"){
                pintarDatosWeekly(data_work)
            }else if(e.target.id === "Monthly"){
                pintarDatosMonthly(data_work)            }
        })

    }catch(error){
        console.log("error en data Work")
    }
}

const pintarDatosDaily = (data_work) =>{
    trabalho_atual.textContent = data_work[0].timeframes.daily.current
    trabalho_previsto.textContent = data_work[0].timeframes.daily.previous

    lazer_atual.textContent = data_work[1].timeframes.daily.current
    lazer_previsto.textContent = data_work[1].timeframes.daily.previous

    estudos_atual.textContent = data_work[2].timeframes.daily.current
    estudos_previsto.textContent = data_work[2].timeframes.daily.previous

    exercicios_atual.textContent = data_work[3].timeframes.daily.current
    exercicios_previsto.textContent = data_work[3].timeframes.daily.previous

    social_atual.textContent = data_work[4].timeframes.daily.current
    social_previsto.textContent = data_work[4].timeframes.daily.previous

    saude_atual.textContent = data_work[5].timeframes.daily.current
    saude_previsto.textContent = data_work[5].timeframes.daily.previous
    
}

const pintarDatosWeekly = (data_work) =>{
    trabalho_atual.textContent = data_work[0].timeframes.weekly.current
    trabalho_previsto.textContent = data_work[0].timeframes.weekly.previous

    lazer_atual.textContent = data_work[1].timeframes.weekly.current
    lazer_previsto.textContent = data_work[1].timeframes.weekly.previous

    estudos_atual.textContent = data_work[2].timeframes.weekly.current
    estudos_previsto.textContent = data_work[2].timeframes.weekly.previous

    exercicios_atual.textContent = data_work[3].timeframes.weekly.current
    exercicios_previsto.textContent = data_work[3].timeframes.weekly.previous

    social_atual.textContent = data_work[4].timeframes.weekly.current
    social_previsto.textContent = data_work[4].timeframes.weekly.previous

    saude_atual.textContent = data_work[5].timeframes.weekly.current
    saude_previsto.textContent = data_work[5].timeframes.weekly.previous
}

const pintarDatosMonthly = (data_work) =>{
    trabalho_atual.textContent = data_work[0].timeframes.monthly.current
    trabalho_previsto.textContent = data_work[0].timeframes.monthly.previous

    lazer_atual.textContent = data_work[1].timeframes.monthly.current
    lazer_previsto.textContent = data_work[1].timeframes.monthly.previous

    estudos_atual.textContent = data_work[2].timeframes.monthly.current
    estudos_previsto.textContent = data_work[2].timeframes.monthly.previous

    exercicios_atual.textContent = data_work[3].timeframes.monthly.current
    exercicios_previsto.textContent = data_work[3].timeframes.monthly.previous

    social_atual.textContent = data_work[4].timeframes.monthly.current
    social_previsto.textContent = data_work[4].timeframes.monthly.previous

    saude_atual.textContent = data_work[5].timeframes.monthly.current
    saude_previsto.textContent = data_work[5].timeframes.monthly.previous
}