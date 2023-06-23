import { useEffect, useState } from 'react'
import { ITaskGroup } from '../../types/task'
import { fetchTaskGroupsService } from '../../apiService'
import { StyledPageWrapper } from './styles'
import TaskGroupList from '../TaskGroupList'

const Page = () => {
  const [groups, setGroups] = useState<ITaskGroup[]>([])
  const [progress, setProgress] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchTaskGroups = async () => {
    setLoading(true)
    const data = await fetchTaskGroupsService()
    setGroups(data)
    calculateProgress(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchTaskGroups()
  }, [])

  const handleTaskCheck = (groupIndex: number) => (taskIndex: number) => {
    const newGroups = [...groups]
    newGroups[groupIndex].tasks[taskIndex].checked =
      !newGroups[groupIndex].tasks[taskIndex].checked
    setGroups(newGroups)
    calculateProgress(newGroups)
  }

  const calculateProgress = (groups: ITaskGroup[]) => {
    let checkedValueSum = 0
    let totalValueSum = 0

    groups.forEach((group) => {
      group.tasks.forEach((task) => {
        totalValueSum += task.value
        if (task.checked) {
          checkedValueSum += task.value
        }
      })
    })

    const finalProgress = Number((checkedValueSum * 100) / totalValueSum)
    setProgress(Math.round(finalProgress))
  }

  return (
    <StyledPageWrapper>
      {loading ? (
        'loading...'
      ) : (
        <TaskGroupList
          groups={groups}
          handleTaskCheck={handleTaskCheck}
          progress={progress}
        />
      )}
    </StyledPageWrapper>
  )
}

export default Page
