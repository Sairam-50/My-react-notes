const drinks={
    tea: {
        part:'leaf',
        caffeine:'15-70 mg/cup',
        age:'4000+ years',
    },
    coffee: {
        part:'bean',
        caffeine:'80-140 mg/cup',
        age:'1000+ years',
    },
};

function Drink({name}){
    const info = drinks[name];
    return(
        <section>
            <dl>
            <dt>Part of plant</dt>
            <dd> {info.part} </dd>
            <dt>caffeine content</dt>
            <dd> {info.caffeine} </dd>
            <dt>age</dt>
            <dd> {info.age} </dd>
                </dl> 
        </section>
    );
}

export default function DrinkList(){
    return(
        <>
        <Drink name="tea" ></Drink>
        <Drink name="coffee" ></Drink>
        </>
    )
}