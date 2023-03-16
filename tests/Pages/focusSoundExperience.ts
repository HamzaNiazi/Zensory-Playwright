import { expect,Page } from "@playwright/test";
import focusSoundExperienceLocators from "../Locators/focusSoundExperience.json"
export  default class FocusSoundExperience{

    constructor (public page:Page){
         
    }
//   async  clickFocusTile(){
//     await this.page.locator("Focus Mood selection tile").click;
//     await this.page.waitForEvent
//     const expectedPartialText = 'focus';
//     const element = await this.page.locator('div#welcome-box-row>div');
//     const actualText = await element.textContent();

//     await expect(actualText).toContain(expectedPartialText);

//     }
async clickFocusTile() {
    //const button = await this.page.locator('div.container div.container div.choose-experience-container div.box-row div.focus-box div.focus-box-inner div.focus-box-front > div.focus-box-front-headings');
    const button =await this.page.locator(focusSoundExperienceLocators.focusTile);
    await button.click();
  
    await this.page.waitForLoadState('networkidle'); // wait for network to become idle
  
    const expectedPartialText = 'focus';
    const element = await this.page.locator(focusSoundExperienceLocators.focusZenseText);
    const actualText = await element.textContent();
    await expect(actualText).toContain(expectedPartialText);
  }

  async clickSoundTile(){
      const button= await this.page.locator(focusSoundExperienceLocators.soundTile);
      await button.click();
      const expectedPartialText = 'Sound';
      const element = await this.page.locator(focusSoundExperienceLocators.chooseSoundTitle);
      const actualText = await element.textContent();
      await expect(actualText).toContain(expectedPartialText);

  }

  async clickRightArrowSoundExperience(){
      const button= await this.page.locator(focusSoundExperienceLocators.rightArrowSoundExperience);
      await button.click();

  }
  async clickLeftArrowSoundExperience(){
      const button = await this.page.locator(focusSoundExperienceLocators.leftArrowSoundExperience);
      await button.click();
    }
  async clickTenminSoundExperienceOption(){
      const button = await this.page.locator(focusSoundExperienceLocators.tenMinSoundExperienceOption);
      await button.click();
    }
  async clickFocusSoundExperienceNextButton(){
      const button =await this.page.locator(focusSoundExperienceLocators.FocusSoundExperienceNextButton);
      await button.click();
      const expectedPartialText = 'chosen';
      const element = await this.page.locator(focusSoundExperienceLocators.hereIsYourChosenExperienceText);
      const actualText = await element.textContent();
      await expect(actualText).toContain(expectedPartialText);
  }

}