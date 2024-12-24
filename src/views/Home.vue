<template>
  <div class="body">
    <div class="header">Periodic Table <span>by Mateusz Słotwiński</span></div>
    <div class="container">
      <div
        class="cell"
        :key="element"
        v-for="element in table"
        :class="element instanceof Break ? 'space' : 'atom'"
        :style="{ width: element.length * 70 + 'px', background: element.type }"
      >
        {{ element.name }}
      </div>
    </div>
    <div style="display: block; height: 15px" />
    <div class="container">
      <div
        class="cell"
        :key="element"
        v-for="element in lantan"
        :class="element instanceof Break ? 'space' : 'atom'"
        :style="{ width: element.length * 70 + 'px', background: element.type }"
      >
        {{ element.name }}
      </div>
    </div>
    <div class="container">
      <div
        class="cell"
        :key="element"
        v-for="element in aktyn"
        :class="element instanceof Break ? 'space' : 'atom'"
        :style="{ width: element.length * 70 + 'px', background: element.type }"
      >
        {{ element.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import table, { Break, lantan, aktyn } from '@/data'

export default defineComponent({
  data() {
    return {
      table,
      lantan,
      aktyn,
      Break,
    }
  },
})
</script>

<style lang="scss">
@import '@/styles/index.scss';

.container {
  max-width: 1260px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.cell {
  width: 66px;
  height: 66px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.atom {
  background: red;
  border-radius: 7px;
  font-weight: 500;
  font-size: 20px;
}

.space {
  margin: 0;
}

.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header {
  font-size: 22px;

  span {
    font-size: 15px;
  }
}
</style>
