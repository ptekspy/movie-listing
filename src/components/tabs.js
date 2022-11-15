export const init = () => {
    const tabs = document.querySelectorAll(".tab")
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(_tab => {
                _tab.classList.toggle("active")
            })
            
            const tabNumber = tab.getAttribute("data-tab")
            const otherTabs = document.querySelectorAll(".tabContent")
            otherTabs.forEach(otherTab => {
                if(otherTab.id !==`tab-content-${tabNumber}`) {
                    otherTab.classList.remove("show")
                    otherTab.classList.add("hide")
                } else {
                    otherTab.classList.add("show")
                    otherTab.classList.remove("hide")
                }
            })
        })
    })
}