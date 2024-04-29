import { useColors } from '@/hooks/use-colors'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SegmentedControl from '@react-native-segmented-control/segmented-control'

interface ToggleProps {
  title: string
  isEnabled: boolean
  setIsEnabled: (isEnabled: boolean) => void
}

export function Toggle({ title, isEnabled, setIsEnabled }: ToggleProps) {
  const colors = useColors()

  return (
    <View style={styles.container}>
      <Text style={[styles.toggleText, { color: colors.foreground }]}>
        {title}
      </Text>
      <View style={styles.spacer}></View>
      <SegmentedControl
        style={styles.segmentedControl}
        values={['yes', 'no']}
        selectedIndex={isEnabled ? 0 : 1}
        onValueChange={(v) => setIsEnabled(v === 'yes')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  toggleText: { fontSize: 18, fontWeight: '600' },
  spacer: { flexGrow: 1 },
  segmentedControl: { marginLeft: 10, width: 140 },
})
