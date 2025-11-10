<template>
  <div class="characters-section">
    <div class="marketplace-container">
      <div class="section-header">
        <h2 class="section-title gradient-text">Game Characters</h2>
        <p class="section-subtitle">Discover unique characters for your adventure</p>
      </div>

      <div class="characters-grid">
        <div
          v-for="(character, index) in characters"
          :key="index"
          class="character-card"
        >
          <div class="character-card-inner">
            <div class="character-image-wrapper">
              <img :src="character.image" :alt="character.name" class="character-image" />
              <div class="character-rarity" :class="`rarity-${character.rarity}`">
                {{ character.rarity }}
              </div>
              <div class="character-stats">
                <div class="stat-item">
                  <span class="stat-icon">⚔️</span>
                  <span class="stat-value">{{ character.power }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-icon">🛡️</span>
                  <span class="stat-value">{{ character.defense }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-icon">⚡</span>
                  <span class="stat-value">{{ character.speed }}</span>
                </div>
              </div>
            </div>

            <div class="character-info">
              <h3 class="character-name">{{ character.name }}</h3>
              <p class="character-class">{{ character.class }}</p>

              <div class="character-abilities">
                <span
                  v-for="(ability, idx) in character.abilities"
                  :key="idx"
                  class="ability-tag"
                >
                  {{ ability }}
                </span>
              </div>

              <div class="character-footer">
                <div class="character-price">
                  <span class="price-label">Price</span>
                  <span class="price-value">{{ character.price }} SWC</span>
                </div>
                <button class="btn-buy-character">
                  <span>Buy Now</span>
                  <i class="icon-arrow-sm-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Characters',
  data() {
    return {
      characters: [
        {
          name: 'Shadow Blade',
          class: 'Assassin',
          rarity: 'legendary',
          power: 95,
          defense: 60,
          speed: 98,
          price: 250,
          image: 'https://via.placeholder.com/350x300/1a1a2e/16c79a?text=Shadow+Blade',
          abilities: ['Stealth', 'Critical Strike', 'Shadow Step']
        },
        {
          name: 'Iron Guardian',
          class: 'Tank',
          rarity: 'epic',
          power: 80,
          defense: 99,
          speed: 45,
          price: 180,
          image: 'https://via.placeholder.com/350x300/0f3460/f39c12?text=Iron+Guardian',
          abilities: ['Shield Wall', 'Taunt', 'Regeneration']
        },
        {
          name: 'Mystic Sage',
          class: 'Mage',
          rarity: 'rare',
          power: 92,
          defense: 50,
          speed: 70,
          price: 150,
          image: 'https://via.placeholder.com/350x300/16213e/9b59b6?text=Mystic+Sage',
          abilities: ['Fireball', 'Teleport', 'Mana Shield']
        },
        {
          name: 'Forest Ranger',
          class: 'Archer',
          rarity: 'epic',
          power: 85,
          defense: 65,
          speed: 88,
          price: 200,
          image: 'https://via.placeholder.com/350x300/1e3a2c/27ae60?text=Forest+Ranger',
          abilities: ['Piercing Shot', 'Eagle Eye', 'Camouflage']
        },
        {
          name: 'Storm Caller',
          class: 'Sorcerer',
          rarity: 'legendary',
          power: 97,
          defense: 55,
          speed: 75,
          price: 280,
          image: 'https://via.placeholder.com/350x300/1a237e/3498db?text=Storm+Caller',
          abilities: ['Lightning', 'Chain Storm', 'Wind Walk']
        },
        {
          name: 'Paladin Knight',
          class: 'Warrior',
          rarity: 'rare',
          power: 88,
          defense: 90,
          speed: 60,
          price: 170,
          image: 'https://via.placeholder.com/350x300/2c3e50/ecf0f1?text=Paladin+Knight',
          abilities: ['Holy Strike', 'Divine Shield', 'Heal']
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.characters-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 48px;
  font-family: 'IntegralCF-Heavy';
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;

  &.gradient-text {
    background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.section-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Metropolis-Regular';
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 1;
}

.character-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.4);

    .character-image {
      transform: scale(1.1);
    }

    .btn-buy-character {
      background: #fff;
      color: #667eea;
    }
  }
}

.character-card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.character-image-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
}

.character-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.character-rarity {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-family: 'Metropolis-Bold';
  text-transform: uppercase;
  letter-spacing: 1px;
  backdrop-filter: blur(10px);

  &.rarity-legendary {
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    color: #000;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  }

  &.rarity-epic {
    background: linear-gradient(135deg, #9945FF 0%, #7B3FF2 100%);
    color: #fff;
    box-shadow: 0 0 20px rgba(153, 69, 255, 0.5);
  }

  &.rarity-rare {
    background: linear-gradient(135deg, #4169E1 0%, #1E90FF 100%);
    color: #fff;
    box-shadow: 0 0 20px rgba(65, 105, 225, 0.5);
  }
}

.character-stats {
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: flex;
  gap: 15px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.stat-icon {
  font-size: 16px;
}

.stat-value {
  font-family: 'Metropolis-Bold';
  font-size: 14px;
  color: #fff;
}

.character-info {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.character-name {
  font-size: 24px;
  font-family: 'IntegralCF-Medium';
  color: #fff;
  margin-bottom: 5px;
}

.character-class {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
  font-family: 'Metropolis-Regular';
}

.character-abilities {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.ability-tag {
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Metropolis-Medium';
}

.character-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.character-price {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3px;
  font-family: 'Metropolis-Regular';
}

.price-value {
  font-size: 20px;
  font-family: 'Metropolis-Bold';
  color: #fff;
}

.btn-buy-character {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: #fff;
  font-family: 'Metropolis-SemiBold';
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  i {
    transition: transform 0.3s ease;
  }

  &:hover {
    i {
      transform: translateX(5px);
    }
  }
}

@media (max-width: 768px) {
  .characters-section {
    padding: 50px 0;
  }

  .section-title {
    font-size: 32px;
  }

  .characters-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .character-image-wrapper {
    height: 250px;
  }
}
</style>
