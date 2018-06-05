<template>
<div class="list">
  <div class="wrapper" v-if="!pending">
    <div class="item" v-for="transaction in transactions" :key="transaction.sender">
      <div class="item-section">
        <span class="item-title">Sender: </span>
        <span class="item-title">{{ transaction.sender }}</span>
      </div>
      <div class="item-section">
        <span class="item-title">Receiver: </span>
        <span class="item-title">{{ transaction.receiver }}</span>
      </div>
      <div class="item-section">
        <span class="item-title">Paid/Goal: </span>
        <span class="item-title">{{ transaction.paid }}/{{ transaction.goal }}</span>
      </div>
      <div class="item-section">
        <span class="item-title">Status: </span>
        <span class="item-title">{{ transaction.status }}</span>
      </div>
    </div>
  </div>
  <div class="pending" v-if="pending">
    Loading...
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Transaction } from '@/models';

@Component
export default class TransactionList extends Vue {
  @Prop() private transactions?: Transaction[];
  @Prop() private pending?: boolean;
}
</script>


<style lang="scss" scoped>
.list {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.wrapper {
  border-radius: 0.25em;
  border: 1px solid #efefef;
}

.item {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1em;

  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }

  &:hover {
    background-color: #efefef;
  }
}

.item-section {
  display: flex;
  flex: 1;
  justify-content: center;
}

.item-title {
  font-weight: 500;
}

.item-value {
  color: rgba(0, 0, 0, 0.5);
}

.pending {
  text-align: center;
}
</style>
