import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react';
import {settings} from '../../settings';
import Questionnaire from './Questionnaire'

class QuestionnaireList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        fetch(settings.api + '/api/quest')
            .then(res => res.json())
            .then(content => {
                this.setState({data: content});
            })
    }

    renderSeedList() {
        let list = [];
        this.state.data.forEach(item => {
            list.push(
                <Questionnaire {...item} key={item._id}></Questionnaire>
            );
        }, this);
        return (list);
    }

    render() {

        var xD = {
            qname: "SKALA DEPRESJI BECKA",
            segment: [
                {
                    question: "A",
                    answers: ["Nie jestem smutny ani przygnębiony", "Odczuwam często smutek i przygnębienie",
                        "Przeżywam stale smutek i przygnębienie, nie mogę uwolnić się od tych przeżyć",
                        "Jestem stale tak smutny i nieszczęśliwy, że jest to nie do wytrzymania"],
                },
                {
                    question: "B",
                    answers: ["Nie przejmuję się zbytnio przyszłością", "Często martwię się o przyszłość",
                        "Obawiam się, że w przyszłości nic dobrego mnie nie czeka",
                        "Czuję, że przyszłość jest beznadziejna i nic tego nie zmieni"],
                },
                {
                    question: "C",
                    answers: ["Sądzę, że nie popełniam większych zaniedbań", "Sądzę, że czynię więcej zaniedbań niż inni",
                        "Kiedy spoglądam na to co robiłem, widzę mnóstwo błędów i zaniedbań",
                        "Jestem zupełnie niewydolny i wszystko robię źle"],
                },
                {
                    question: "D",
                    answers: ["To co robię sprawia mi przyjemność", "Nie cieszy mnie to co robię",
                        "Nic mi teraz nie daje prawdziwego zadowolenia",
                        "Nie potrafię przeżywać zadowolenia i przyjemności i wszystko mnie nuży"],
                },
                {
                    question: "E",
                    answers: ["Nie czuję się winny ani wobec siebie ani wobec innych", "Dość często miewam wyrzuty sumienia",
                        "Czuję często, że zawiniłem",
                        "Stale czuję się winnym"],
                },
                {
                    question: "F",
                    answers: ["Sądzę, że nie zasługuję na karę", "Sądzę, że zasługuję na karę",
                        "Spodziewam się ukarania",
                        "Wiem, że jestem karany (lub ukarany)"],
                },
                {
                    question: "G",
                    answers: ["Jestem z siebie zadowolony", "Nie jestem z siebie zadowolony",
                        "Czuję do siebie niechęć",
                        " Nienawidzę siebie"],
                },
                {
                    question: "H",
                    answers: ["Nie czuję się gorszy od innych ludzi", "Zarzucam sobie, że jestem nieudolny i popełniam błędy",
                        "Stale potępiam siebie za popełnione błędy",
                        "Winię siebie za wszystko zło, które istnieje"],
                },
                {
                    question: "I",
                    answers: ["Nie myślę o odebraniu sobie życia", "Myślę o samobójstwie, ale nie mógłbym tego dokonać",
                        "Pragnę odebrać sobie życie",
                        "Popełnię samobójstwo, jak będzie odpowiednia sposobność"],
                },
                {
                    question: "J",
                    answers: ["Nie płaczę częściej niż zwykle", "Płaczę częściej niż dawniej",
                        "Ciągle chce mi się płakać",
                        "Chciałbym płakać, lecz nie jestem w stanie"],
                },
                {
                    question: "K",
                    answers: ["Nie jestem bardziej podenerwowany niż dawniej", "Jestem bardziej nerwowy i przykry niż dawniej",
                        "Jestem stale rozdrażniony",
                        "Wszystko to, co dawniej mnie denerwowało, teraz nic mnie nie obchodzi"],
                },
                {
                    question: "L",
                    answers: ["Ludzie interesują mnie jak dawniej.", "Interesuję się ludźmi mniej niż dawniej",
                        "Utraciłem większość zainteresowania innymi ludźmi",
                        "Utraciłem wszelkie zainteresowanie innymi ludźmi"],
                },
                {
                    question: "M",
                    answers: ["Decyzję podejmuję łatwo, tak jak dawniej", "Częściej niż kiedyś odwlekam podjęcie decyzji",
                        "Mam duże trudności z podjęciem decyzji",
                        "Nie jestem w stanie podjąć żadnej decyzji"],
                },
                {
                    question: "N",
                    answers: ["Sądzę, że wyglądam nie gorzej niż dawniej", "Martwię się tym, że wyglądam staro i nieatrakcyjnie",
                        "Czuję, że wyglądam coraz gorzej",
                        "Jestem przekonany, że wyglądam okropnie i odpychająco"],
                },
                {
                    question: "O",
                    answers: ["Mogę pracować jak dawniej", "Z trudem rozpoczynam każdą czynność",
                        "Z wielkim wysiłkiem zmuszam się do robienia czegokolwiek",
                        "Nie jestem w stanie nic robić"],
                },
                {
                    question: "P",
                    answers: ["Sypiam dobrze, jak zwykle", "Sypiam gorzej niż dawniej",
                        "Rano budzę się 1-2 godziny wcześniej i trudno mi jest ponownie usnąć",
                        "Budzę się kilka godzin za wcześnie i nie mogę ponownie usnąć"],
                },
                {
                    question: "Q",
                    answers: ["Nie męczę się bardziej niż dawniej", "Męczę się znacznie łatwiej niż poprzednio",
                        "Męczę się wszystkim co robię",
                        "Jestem zbyt zmęczony aby cokolwiek robić"],
                },
                {
                    question: "R",
                    answers: ["Mam apetyt nie gorszy niż dawniej", "Mam trochę gorszy apetyt",
                        "Apetyt mam wyraźnie gorszy",
                        "Nie mam w ogóle apetytu"],
                },
                {
                    question: "S",
                    answers: ["Nie tracę na wadze ciała (w okresie ostatniego miesiąca)", "Straciłem na wadze więcej niż 2 kg",
                        "Straciłem na wadze więcej niż 4 kg",
                        "Straciłem na wadze więcej niż 6 kg"],
                },
                {
                    question: "T",
                    answers: ["Nie martwię się o swoje zdrowie bardziej niż zawsze", "Martwię się swoimi dolegliwościami, mam rozstrój żołądka, zaparcia, bóle",
                        "Stan mego zdrowia bardzo mnie martwi, często o tym myślę",
                        "Bardzo martwię się o swoje zdrowie, nie mogę o niczym innym myśleć"],
                },
                {
                    question: "U",
                    answers: ["Moje zainteresowania seksualne nie uległy zmianom", "Jestem mniej zainteresowany sprawami płci (seksu)",
                        "Problemy płciowe wyraźnie mnie nie interesują",
                        "Utraciłem wszelkie zainteresowanie sprawami seksualnymi"],
                },
            ]
        };


        if (this.state.data) {
            return (
                <Segment>
                    <Questionnaire {...xD} key={xD._id}></Questionnaire>
                    {this.renderSeedList()}
                </Segment>
            );
        } else {
            return null;
        }
    }
}
export default QuestionnaireList;