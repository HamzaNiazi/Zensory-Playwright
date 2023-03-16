import { test } from "@playwright/test";
import FocusSoundExperience from "../Pages/FocusSoundExperience";

test("Focus sound experience smokeTest",async({page,baseURL})=>{
   
   const FocusSoundExperienceObject =new FocusSoundExperience(page);
   // await page.goto('${baseURL}');
   //await page.goto("http://localhost:3000/");
   await page.goto("https://thezensorywebversion-dev.web.app/");
    await FocusSoundExperienceObject.clickFocusTile();
    await FocusSoundExperienceObject.clickSoundTile();
    await FocusSoundExperienceObject.clickRightArrowSoundExperience();
    await FocusSoundExperienceObject.clickRightArrowSoundExperience();
    await FocusSoundExperienceObject.clickRightArrowSoundExperience();
    await FocusSoundExperienceObject.clickRightArrowSoundExperience(); 
    await FocusSoundExperienceObject.clickLeftArrowSoundExperience();
    await FocusSoundExperienceObject.clickLeftArrowSoundExperience();
    await FocusSoundExperienceObject.clickLeftArrowSoundExperience();
    await FocusSoundExperienceObject.clickFocusSoundExperienceNextButton();
}

)