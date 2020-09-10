import {renderTemplate as tmpl} from "@utils/template";
import {appendId, toggleClassesId} from "@utils/dom";
import checkbox from "@templates/_input/checkbox.html";
import imagesPage from "@templates/images/images-page.html";
import imageAdd from "@templates/images/image-add.html";
import imageEdit from "@templates/images/image-edit.html";
import imageEditMeta from "@templates/images/image-edit-meta.html";
import imageEditCategories from "@templates/images/image-edit-categories.html";
import imageEditCategoriesParent from "@templates/images/image-edit-categories-parent.html";
import imageEditCategoriesParentEnd from "@templates/images/image-edit-categories-parent-end.html";
import imageEditCategoriesChildOpen from "@templates/images/image-edit-categories-child-open.html";
import imageEditCategoriesChildClosed from "@templates/images/image-edit-categories-child-closed.html";
import imageEditCategoriesChildEnd from "@templates/images/image-edit-categories-child-end.html";
import imageEditCategoriesSumParent from "@templates/images/image-edit-categories-sum-parent.html";
import imageEditCategoriesSumChild from "@templates/images/image-edit-categories-sum-child.html";
import imageFilter from "@templates/images/image-filter.html";
import imageFilterBubble from "@templates/images/image-filter-bubble.html";
import imageFilterOption from "@templates/images/image-filter-option.html";
import imageSummary from "@templates/images/image-summary.html";

export default {
  title: 'Image labeler',
}

export const Add = () =>  {
    const pageContainer = tmpl(imagesPage);

    const pageContents = tmpl(imageAdd);

    appendId(pageContainer, "page-contents", pageContents);

    return pageContainer;
}
export const Edit = () =>  {
    const pageContainer = tmpl(imagesPage);
    const editContainer = tmpl(imageEdit);
    const editMeta = tmpl(imageEditMeta);

    appendId(editContainer, "right-area", editMeta);

    const pageContents = populateMetaOptions(editContainer);

    appendId(pageContainer, "page-contents", pageContents);

    return pageContainer;
}
export const Categories = () =>  {
    const pageContainer = tmpl(imagesPage);
    const editContainer = tmpl(imageEdit);
    const editCategories = tmpl(imageEditCategories);

    const cat1 = tmpl(imageEditCategoriesParentEnd, {name: "English"});

    const cat2 = tmpl(imageEditCategoriesParent, {name: "Hebrew"});
    const cat2Child1 = tmpl(imageEditCategoriesChildOpen, {name: "Vocabulary"});
    const cat2Child1Child = tmpl(imageEditCategoriesChildEnd, {name: "Blah"});
    const cat2Child2 = tmpl(imageEditCategoriesChildEnd, {name: "Parsha"});
    const cat2Child3 = tmpl(imageEditCategoriesChildClosed, {name: "Shapes"});
    appendId(cat2Child1, "children", cat2Child1Child);
    [cat2Child1, cat2Child2, cat2Child3].forEach(x => appendId(cat2, "children", x));

    [cat1, cat2].forEach(cat => appendId(editCategories, "select-list", cat));

    const sum1 = tmpl(imageEditCategoriesSumParent, {name: "English"});
    const sum2 = tmpl(imageEditCategoriesSumParent, {name: "Hebrew"});
    const sum2Child1 = tmpl(imageEditCategoriesSumChild, {name: "Vocabulary"});
    const sum2Child1Child = tmpl(imageEditCategoriesSumChild, {name: "Blah"});

    appendId(sum2Child1, "children", sum2Child1Child);
    appendId(sum2, "children", sum2Child1);

    [sum1, sum2].forEach(sum => appendId(editCategories, "summary-list", sum));

    appendId(editContainer, "right-area", editCategories);

    const pageContents = editContainer;

    appendId(pageContainer, "page-contents", pageContents);

    return pageContainer;
}

/*
export const WithMenu = () => {

    const pageContainer = tmpl(imagesPage);

    const pageContents = populateMetaOptions(tmpl(imageEdit));

    const menu = tmpl(imageFilter);

    ["Etz Chaim", "Rimon"]
      .forEach(label=> {
        appendId(menu, "bubbles", makeFilterBubble(label));
      });

    ["Etz Chaim", "Rimon", "Another School", "Some Place"]
      .forEach(label=> {
        appendId(menu, "options", makeFilterOption(label));
      });

    appendId(pageContents, "menu-container", menu);

    appendId(pageContainer, "page-contents", pageContents);

    return pageContainer;

};
*/

function populateMetaOptions(container) {
  ["Clipart", "Photo", "B & W", "Drawing", "Comic"]
    .forEach(style => {
      appendId(container, "styles", makeCheckbox(style));
    });

  ["All ages", "Kindergarden", "Elementary", "Middle School", "High School", "University"]
    .forEach(age_range => {
      appendId(container, "age_ranges", makeCheckbox(age_range));
    });

  ["All", "No religion", "Reform/Conservative", "Orthodox", "Charedi"]
    .forEach(affiliation => {
      appendId(container, "affiliations", makeCheckbox(affiliation));
    });
  return container;
}

function makeFilterBubble(label) {
  return tmpl(imageFilterBubble, {label, id: label});
}

function makeFilterOption(label) {
  return tmpl(imageFilterOption, {label, id: label});
}

function makeCheckbox(label) {
  return tmpl(checkbox, {label, id: label});
}
/*
export const LabelCategory = () => {
  tmpl(labelcategory, {});

        return labelcategory;
};

export const ImageSummary = () => {
  tmpl(imagesummary, {});

        return imagesummary;
};

function setLabel(parentElement, label) {

    const element = tmpl(imageLabelFilter);
    // element.innerText = label;

    return appendId(parentElement, "label", element);
};
*/
