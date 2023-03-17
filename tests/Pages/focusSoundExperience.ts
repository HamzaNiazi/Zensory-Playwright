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

  async clickLearnWhySoundExperience(){
      const button =await this.page.locator(focusSoundExperienceLocators.learnWhySoundExperience);
      await button.click();
      const expectedPartialText = 'Binaural';
      const element = await this.page.locator(focusSoundExperienceLocators.binauralBeatsSoundExperiencePopupText);
      const actualText = await element.textContent();
      await expect(actualText).toContain(expectedPartialText);

  }
  async clickcloseBinauralBeatsSoundExperiencePopupText(){
      const button =await this.page.locator(focusSoundExperienceLocators.closeBinauralBeatsSoundExperiencePopupText);
      await button.click();

  }
  async clickletsBeginFocusSoundExperienceButton(){
      const button =await this.page.locator(focusSoundExperienceLocators.letsBeginFocusSoundExperienceButton);
      await button.click();
    //   const expectedPartialText = 'Full';
    //   const element = await this.page.locator(focusSoundExperienceLocators.fullScreenSoundExperienceText);
    //   const actualText = await element.textContent();
    //   await expect(actualText).toContain(expectedPartialText);
 
    }
    async clickvolumeFocusSoundExperience(){
        const button = await this.page.locator(focusSoundExperienceLocators.volumeFocusSoundExperience);
        await button.click();

    }

    async binauralFocusSlider(){
        const slider=await this.page.locator(focusSoundExperienceLocators.binauralSliderFocusSoundExperience);
//         const box = await slider.boundingBox();

// // Calculate the x-coordinate of the center of the slider
// const centerX = box.x + box.width / 2;

// // Move the slider to the right
// await slider.dispatchEvent('mousedown', { x: centerX, y: box.y });
// await slider.dispatchEvent('mousemove', { x: centerX + 50, y: box.y });
// await slider.dispatchEvent('mouseup', { x: centerX + 50, y: box.y });

// // Move the slider to the left
// await slider.dispatchEvent('mousedown', { x: centerX, y: box.y });
// await slider.dispatchEvent('mousemove', { x: centerX - 50, y: box.y });
// await slider.dispatchEvent('mouseup', { x: centerX - 50, y: box.y });
//     }

const sliderBoundingBox = await slider.boundingBox();

  // calculate the x-coordinate for 50% of the slider
  const centerX = sliderBoundingBox.x + sliderBoundingBox.width / 2;

  // move the slider to the left by 50 pixels
  await this.page.mouse.move(centerX, sliderBoundingBox.y);
  await this.page.mouse.down();
  await this.page.mouse.move(centerX - 50, sliderBoundingBox.y, { steps: 20 });
  await this.page.mouse.up();

  // move the slider to the right by 50 pixels
  await this.page.mouse.move(centerX, sliderBoundingBox.y);
  await this.page.mouse.down();
  await this.page.mouse.move(centerX + 50, sliderBoundingBox.y, { steps: 20 });
  await this.page.mouse.up();
    }


}