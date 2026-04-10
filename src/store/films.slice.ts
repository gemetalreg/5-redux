import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilmsProps {
    id: number;
    imgName: string;
    imgAlt: string;
    cardName: string;
    cardChoice: string;
    choiceCount: number;
};


const initialState: FilmsProps[] = [{
    id: 0,
    imgName: "/assets/BlackWidow.jpg",
    imgAlt: "BlackWidow",
    cardName: "Black Widow",
    cardChoice: "В избранное",
    choiceCount: 324
},
{
    id: 1,
    imgName: "/assets/Shang-Chi-and-the-Legend-of-the-Ten-Rings.jpg",
    imgAlt: "Shang Chi",
    cardName: "Shang Chi",
    cardChoice: "В избранное",
    choiceCount: 124

},
{
    id: 2,
    imgName: "/assets/Loki.jpg",
    imgAlt: "Loki",
    cardName: "Loki",
    cardChoice: "В избранное",
    choiceCount: 235

},
{
    id: 3,
    imgName: "/assets/HowIMetYourMother.jpg",
    imgAlt: "How I Met Your Mother",
    cardName: "How I Met Your Mother",
    cardChoice: "В избранное",
    choiceCount: 123

},
{
    id: 4,
    imgName: "/assets/MoneyHeist.jpg",
    imgAlt: "Money Heist",
    cardName: "Money Heist",
    cardChoice: "В избраном",
    choiceCount: 8125
},
{
    id: 5,
    imgName: "/assets/Friends.jpg",
    imgAlt: "Friends",
    cardName: "Friends",
    cardChoice: "В избранное",
    choiceCount: 123

},
{
    id: 6,
    imgName: "/assets/TheBigBangTheory.jpg",
    imgAlt: "LThe Big Bang Theoryi",
    cardName: "The Big Bang Theory",
    cardChoice: "В избранное",
    choiceCount: 12

},
{
    id: 7,
    imgName: "/assets/TwoAndHalfMen.jpg",
    imgAlt: "Two And a Half Men",
    cardName: "Two And a Half Men",
    cardChoice: "В избранное",
    choiceCount: 456
}];


export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const filmsActions = filmsSlice.actions;

export default filmsSlice.reducer;


