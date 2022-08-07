const quotes = [
    {
        quote: "일찍 일어나는 새가 피곤하다",
        author: "-sewon-"
    },
    {
        quote: "일찍 일어나는 벌레가 먼저 먹힌다",
        author: "-권세원-"
    },
    {
        quote: "행복을 돈으로 살 수 없다면 혹시 돈이 모자란건 아닌지 확인하라",
        author: "-Gwon_5-"
    },
    {
        quote: "돈이 인생의 전부는 아니지만 그만한게 또 없다",
        author: "-나-"
    },
    {
        quote: "내가 일으킬 수 있는 아주 작은 기적은 밍기적이다",
        author: "-권 아무개-"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const dailysQuote = quotes[Math.floor(Math.random() *quotes.length)];

quote.innerText = dailysQuote.quote;
author.innerText = dailysQuote.author;