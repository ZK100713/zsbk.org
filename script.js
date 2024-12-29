// 模拟实体数据
const entities = {
    "zhysbsb0011101": {
        name: "SB001 最美丽的女人",
        image: "https://via.placeholder.com/600x400?text=Entity+A001",
        description: "这是一种未知的实体，具有神秘的能力和未知的起源。"
    },
    "lzcsbsb0022202": {
        name: "SB002 纯恨战神",
        image: "https://via.placeholder.com/600x400?text=Entity+B002",
        description: "该实体可以在极端条件下生存，已知在多个领域具有影响力。"
    },
    "xemsbsb0033303": {
        name: "SB003 黑奴",
        image: "https://via.placeholder.com/600x400?text=Entity+C003",
        description: "C003实体的特征目前尚不完全了解，但有多个目击报告显示其异常行为。"
    }
};

// 显示实体信息
function showEntity() {
    const entityCode = document.getElementById("entity-code").value.trim();
    const entityInfoDiv = document.getElementById("entity-info");
    const entityImage = document.getElementById("entity-image");
    const entityDescription = document.getElementById("entity-description");

    if (entities[entityCode]) {
        const entity = entities[entityCode];
        entityImage.src = entity.image;
        entityImage.style.display = "block";
        entityDescription.textContent = entity.description;
    } else {
        alert("未找到对应的实体，请检查实体编码！");
        entityImage.style.display = "none";
        entityDescription.textContent = "";
    }
}
