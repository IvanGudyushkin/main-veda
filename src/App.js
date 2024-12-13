import './App.css';
import {
    Header,
    Sections,
    EventsBlock,
    ItemsBlock,
    TagsItem,
    PracticeBlock,
    SpiritualPractice,
    feedbacktagItemsData,
    resultItems,
    spiritualPractices,
    AnastasiyaBlock,
    articles,
    ConsultationsBlock,
    SocialMedia,
    Article,
    FeedbackBlock,
    feedbacks,
    Footer,
    ProductsBlock,
    products
} from './Components';
import TagModal from "./Components/UI/ModalWindow/tagModal";
import React, {useState} from "react";
import {Totalbg} from "./Components/UI/DesignCircles";
function App() {
    const [activeModal, setActiveModal] = useState(false)
    const [info, setInfo] = useState({})
    const closeModal = () => {
        setActiveModal(false); // Закрываем модальное окно
    };

    const openModal = (info) => {
        setInfo(info)
        setActiveModal(true)
    }

  return (
    <div id='app' className="App">
        {activeModal &&
            <TagModal tags={info.tags} fullDescription={info.fullDescription} close={closeModal}/>
        }
        <Totalbg/>
        <Header/>
        <Sections/>
        <EventsBlock/>
        <ItemsBlock title={"Перемены в жизни участниц ретритов"}>
            {feedbacktagItemsData.map((item, index) => (
                <TagsItem openModal={openModal} key={index} info={item}/>
            ))}
        </ItemsBlock>
        <PracticeBlock/>
        <ItemsBlock title={'Духовные практики, помогающие в трудных ситуациях и улучшающие судьбу, гороскоп'}>
            {spiritualPractices.map((item, index) => (
                <SpiritualPractice key={index} title={item.title} description={item.description}/>
            ))}
        </ItemsBlock>
        <AnastasiyaBlock/>
        <ConsultationsBlock/>
        <ItemsBlock title={"Результаты после консультаций"}>
            {resultItems.map((item, index) => (
                <TagsItem openModal={openModal} key={index} info={item} />
            ))}
        </ItemsBlock>
        <ProductsBlock products={products}/>
        <ItemsBlock more={true} title={"Что почитать?"}>
            {articles.map((item, index) => (
                <Article key={index} title={item.title} description={item.description} />
            ))}
        </ItemsBlock>
        <SocialMedia/>
        <FeedbackBlock feedbacks={feedbacks}/>
        <Footer/>
    </div>
  );
}

export default App;
