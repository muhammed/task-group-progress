import { ITaskGroup } from '../../types/task'
import TaskGroup from '../TaskGroup'
import {
  StyledHeader,
  StyledList,
  StyledProgressBar,
  StyledProgressBarWrapper,
  StyledTitle,
  StyledWrapper,
} from './styles'

interface ITaskGroupListProps {
  groups: ITaskGroup[]
  handleTaskCheck: (groupIndex: number) => (taskIndex: number) => void
  progress: number
}

const TaskGroupList = ({
  groups,
  handleTaskCheck,
  progress,
}: ITaskGroupListProps) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledTitle>Lodgify Grouped Tasks</StyledTitle>
        <StyledProgressBarWrapper>
          {progress > 0 && (
            <StyledProgressBar style={{ width: `${progress}%` }}>
              {progress === 100 && '🎉'}
              {progress}%
            </StyledProgressBar>
          )}
          {progress === 0 && <div>0%</div>}
        </StyledProgressBarWrapper>
      </StyledHeader>

      <StyledList>
        {groups.map((group, index) => (
          <TaskGroup
            key={index}
            group={group}
            onTaskCheck={handleTaskCheck(index)}
          />
        ))}
      </StyledList>
    </StyledWrapper>
  )
}

export default TaskGroupList
