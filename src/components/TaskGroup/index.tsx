import { useState } from 'react'
import Checkbox from '../Checkbox'
import { ITaskGroup } from '../../types/task'
import { AnimatePresence, motion } from 'framer-motion'
import {
  StyledContent,
  StyledContentContainer,
  StyledHeader,
  StyledHeaderAction,
  StyledHeaderActionIcon,
  StyledHeaderActionTitle,
  StyledHeaderIcon,
  StyledHeaderTitle,
  StyledWrapper,
} from './styles'
import TodoIcon from '../icons/Todo'
import ArrowLineDownIcon from '../icons/ArrowLineDown'

interface TaskGroupProps {
  group: ITaskGroup
  onTaskCheck: (taskIndex: number) => void
}

const variants = {
  open: { height: 'auto' },
  collapsed: { height: 0 },
}

const TaskGroup = ({ group, onTaskCheck }: TaskGroupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <StyledWrapper>
      <StyledHeader onClick={toggle}>
        <StyledHeaderTitle>
          <StyledHeaderIcon>
            <TodoIcon />
          </StyledHeaderIcon>
          <div>{group.name}</div>
        </StyledHeaderTitle>

        <StyledHeaderAction>
          <StyledHeaderActionTitle>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                key={isOpen ? 'open' : 'closed'}
              >
                {isOpen ? 'Hide' : 'Show'}
              </motion.div>
            </AnimatePresence>
          </StyledHeaderActionTitle>
          <StyledHeaderActionIcon active={isOpen}>
            <ArrowLineDownIcon />
          </StyledHeaderActionIcon>
        </StyledHeaderAction>
      </StyledHeader>
      <StyledContent
        as={motion.div}
        variants={variants}
        initial="collapsed"
        animate={isOpen ? 'open' : 'collapsed'}
      >
        <StyledContentContainer>
          <AnimatePresence>
            {group.tasks.map((task, index) => (
              <Checkbox
                key={index}
                checked={task.checked}
                onChange={() => onTaskCheck(index)}
                label={task.description}
              />
            ))}
          </AnimatePresence>
        </StyledContentContainer>
      </StyledContent>
    </StyledWrapper>
  )
}

export default TaskGroup
