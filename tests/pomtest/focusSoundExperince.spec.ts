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
    await FocusSoundExperienceObject.clickBeachTileSoundExperience();
    await FocusSoundExperienceObject.clickTenminSoundExperienceOption();
    await FocusSoundExperienceObject.clickFocusSoundExperienceNextButton();
    await FocusSoundExperienceObject.clickLearnWhySoundExperience();
    await FocusSoundExperienceObject.clickCloseBinauralBeatsSoundExperiencePopupText();
    await FocusSoundExperienceObject.clickLetsBeginFocusSoundExperienceButton();
    await FocusSoundExperienceObject.clickStartExperienceButtonSafariFocusSoundExperience();
    await FocusSoundExperienceObject.clickVolumeFocusSoundExperience();
    await FocusSoundExperienceObject.clickBinauralFocusSlider();
    await FocusSoundExperienceObject.clickMusicSliderFocusSoundExperience();
    //await FocusSoundExperienceObject.clickNaturescapeSliderFocusSoundExperience();
    await FocusSoundExperienceObject.clickCloseVolumePopUpFocusSoundEXperience();
    await FocusSoundExperienceObject.clickplayPauseFocusSoundExperienceButton();
    await FocusSoundExperienceObject.clickResumeTextOnTapToResumePopUpFocusSoundExperience();
    //  await FocusSoundExperienceObject.clickFullScreenFocusSoundExperience();
    //  await FocusSoundExperienceObject.clickFullScreenFocusSoundExperience();
    await FocusSoundExperienceObject.clickEndExperienceFocusSoundExperienceButton();
    await FocusSoundExperienceObject.clickEndExperincePoupFocusSoundExperienceButton();
    await FocusSoundExperienceObject.clickYesHappyFaceFocusSoundExperienceButton();
    await FocusSoundExperienceObject.clickContinueEndExperienceFocusSoundExperienceButton();
    await FocusSoundExperienceObject.clickFinishAndGoHomeButton();
}  

)